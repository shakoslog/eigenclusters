"""
EigenCluster Command Line Interface

This module provides a command-line interface to EigenCluster functionality.
"""

import argparse
import json
import os
import sys

from eigencluster import ClusterGenerator, ClusterCritic
from eigencluster.export import export_to_typescript, update_typescript_index, copy_to_typescript_dir


def parse_args():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description="EigenCluster CLI")
    subparsers = parser.add_subparsers(dest="command", help="Command to run")
    
    # Specs command
    specs_parser = subparsers.add_parser("specs", help="Generate cluster specifications (without members)")
    specs_parser.add_argument("--input", "-i", required=True, help="Input data file (JSON)")
    specs_parser.add_argument("--output", "-o", required=True, help="Output specs file (JSON)")
    specs_parser.add_argument("--num-clusters", "-n", type=int, default=5, help="Number of clusters")
    specs_parser.add_argument("--model", "-m", default="gpt-4", help="Model to use")
    specs_parser.add_argument("--prompt-template", "-p", help="Path to a custom prompt template file")
    specs_parser.add_argument("--save-prompt", "-s", help="Path to save the generated prompt")
    specs_parser.add_argument("--use-llm", action="store_true", help="Use LLM API for generation (requires API key)")
    
    # Populate command
    populate_parser = subparsers.add_parser("populate", help="Populate clusters with members based on specs")
    populate_parser.add_argument("--input", "-i", required=True, help="Input data file (JSON)")
    populate_parser.add_argument("--specs", "-s", required=True, help="Input cluster specs file (JSON)")
    populate_parser.add_argument("--output", "-o", required=True, help="Output populated clusters file (JSON)")
    populate_parser.add_argument("--model", "-m", default="gpt-4", help="Model to use")
    populate_parser.add_argument("--prompt-template", "-p", help="Path to a custom prompt template file")
    populate_parser.add_argument("--save-prompt", "-sp", help="Path to save the generated prompt")
    populate_parser.add_argument("--use-llm", action="store_true", help="Use LLM API for generation (requires API key)")
    
    # Generate command (now a combined operation, but can use existing specs)
    gen_parser = subparsers.add_parser("generate", help="Generate clusters (specs + populate in one step)")
    gen_parser.add_argument("--input", "-i", required=True, help="Input data file (JSON)")
    gen_parser.add_argument("--output", "-o", required=True, help="Output clusters file (JSON)")
    gen_parser.add_argument("--specs", "-s", help="Input cluster specs file (JSON) (optional)")
    gen_parser.add_argument("--num-clusters", "-n", type=int, default=5, help="Number of clusters (ignored if specs provided)")
    gen_parser.add_argument("--model", "-m", default="gpt-4", help="Model to use")
    gen_parser.add_argument("--specs-template", "-st", help="Path to a custom specs prompt template file")
    gen_parser.add_argument("--populate-template", "-pt", help="Path to a custom populate prompt template file")
    gen_parser.add_argument("--save-specs-prompt", "-ssp", help="Path to save the generated specs prompt")
    gen_parser.add_argument("--save-populate-prompt", "-spp", help="Path to save the generated populate prompt")
    gen_parser.add_argument("--save-specs", "-ss", help="Path to save the generated specs")
    gen_parser.add_argument("--use-llm", action="store_true", help="Use LLM API for generation (requires API key)")
    
    # Eigenclusters command (new)
    eigen_parser = subparsers.add_parser("eigenclusters", help="Generate eigencultures analysis")
    eigen_parser.add_argument("--output", "-o", required=True, help="Output eigenclusters file (JSON)")
    eigen_parser.add_argument("--start-year", "-sy", type=int, required=True, help="Start year for analysis")
    eigen_parser.add_argument("--end-year", "-ey", type=int, required=True, help="End year for analysis")
    eigen_parser.add_argument("--periodicity", "-p", type=int, default=10, help="Year intervals for analysis points")
    eigen_parser.add_argument("--cluster-range", "-cr", default="1-5", help="Range of clusters to analyze (e.g., '1-5')")
    eigen_parser.add_argument("--context", "-c", help="Additional context for analysis")
    eigen_parser.add_argument("--context-file", "-cf", help="File containing additional context")
    eigen_parser.add_argument("--model", "-m", default="gpt-4", help="Model to use")
    eigen_parser.add_argument("--save-prompt", "-sp", help="Path to save the generated prompt")
    eigen_parser.add_argument("--report", "-r", help="Path to save a human-readable markdown report")
    eigen_parser.add_argument("--use-llm", action="store_true", help="Use LLM API for generation (requires API key)")
    
    # Analyze command
    analyze_parser = subparsers.add_parser("analyze", help="Analyze clusters")
    analyze_parser.add_argument("--input", "-i", required=True, help="Input clusters file (JSON)")
    analyze_parser.add_argument("--output", "-o", required=True, help="Output analysis file (JSON)")
    analyze_parser.add_argument("--model", "-m", default="gpt-4", help="Model to use")
    analyze_parser.add_argument("--use-llm", action="store_true", help="Use LLM API for generation (requires API key)")

    # Export to TypeScript command
    export_parser = subparsers.add_parser("export-ts", help="Export clusters to TypeScript format")
    export_parser.add_argument("--input", "-i", required=True, help="Input clusters file (JSON)")
    export_parser.add_argument("--preset-id", "-id", required=True, help="Preset ID to use for TypeScript")
    export_parser.add_argument("--preset-name", "-n", required=True, help="Preset name")
    export_parser.add_argument("--preset-desc", "-d", required=True, help="Preset description")
    export_parser.add_argument("--start-year", "-sy", help="Start year (defaults to first year in data)")
    export_parser.add_argument("--end-year", "-ey", help="End year (defaults to last year in data)")
    export_parser.add_argument("--cluster-start", "-cs", type=int, default=1, help="Starting cluster number")
    export_parser.add_argument("--cluster-end", "-ce", type=int, default=5, help="Ending cluster number")
    export_parser.add_argument("--periodicity", "-p", type=int, default=10, help="Year interval")
    export_parser.add_argument("--context", "-c", help="Analysis context")
    export_parser.add_argument("--model", "-m", default="claude-3-opus-20240229", help="Model used")
    export_parser.add_argument("--output-dir", "-o", default="output", help="Directory to save output files")
    export_parser.add_argument("--ts-dir", "-ts", help="TypeScript presets directory. If provided, copies files and updates index.ts")
    export_parser.add_argument("--legacy-format", "-lf", action="store_true", help="Use legacy format with nested parameters object for backward compatibility")

    return parser.parse_args()


def main():
    """Run the CLI."""
    args = parse_args()
    
    if args.command == "specs":
        try:
            with open(args.input, "r") as f:
                data = json.load(f)
            
            generator = ClusterGenerator(model_name=args.model)
            
            # Load custom prompt template if provided
            prompt_template = None
            if args.prompt_template:
                prompt_template = generator.load_prompt(args.prompt_template)
            
            # Generate the prompt
            prompt = generator.generate_cluster_specs_prompt(data, args.num_clusters, prompt_template)
            
            # Save the prompt if requested
            if args.save_prompt:
                generator.save_prompt(prompt, args.save_prompt)
                print(f"Specs prompt saved to {args.save_prompt}")
            
            # Generate the cluster specs
            cluster_specs = generator.generate_cluster_specs(
                data, 
                num_clusters=args.num_clusters, 
                prompt_template=prompt_template,
                use_llm=args.use_llm
            )
            generator.save_clusters(cluster_specs, args.output)
            print(f"Cluster specifications generated and saved to {args.output}")
        except Exception as e:
            print(f"Error generating cluster specs: {e}", file=sys.stderr)
            sys.exit(1)
            
    elif args.command == "populate":
        try:
            with open(args.input, "r") as f:
                data = json.load(f)
                
            with open(args.specs, "r") as f:
                cluster_specs = json.load(f)
            
            generator = ClusterGenerator(model_name=args.model)
            
            # Load custom prompt template if provided
            prompt_template = None
            if args.prompt_template:
                prompt_template = generator.load_prompt(args.prompt_template)
            
            # Generate the prompt
            prompt = generator.generate_population_prompt(data, cluster_specs, prompt_template)
            
            # Save the prompt if requested
            if args.save_prompt:
                generator.save_prompt(prompt, args.save_prompt)
                print(f"Population prompt saved to {args.save_prompt}")
            
            # Populate the clusters
            populated_clusters = generator.populate_clusters(
                data, 
                cluster_specs, 
                prompt_template=prompt_template,
                use_llm=args.use_llm
            )
            generator.save_clusters(populated_clusters, args.output)
            print(f"Clusters populated and saved to {args.output}")
        except Exception as e:
            print(f"Error populating clusters: {e}", file=sys.stderr)
            sys.exit(1)
    
    elif args.command == "generate":
        try:
            with open(args.input, "r") as f:
                data = json.load(f)
            
            generator = ClusterGenerator(model_name=args.model)
            
            # If specs file is provided, load it
            cluster_specs = None
            if args.specs:
                with open(args.specs, "r") as f:
                    cluster_specs = json.load(f)
                print(f"Using existing cluster specs from {args.specs}")
            else:
                # Load custom specs prompt template if provided
                specs_template = None
                if args.specs_template:
                    specs_template = generator.load_prompt(args.specs_template)
                
                # Generate the specs prompt
                specs_prompt = generator.generate_cluster_specs_prompt(
                    data, 
                    args.num_clusters, 
                    specs_template
                )
                
                # Save the specs prompt if requested
                if args.save_specs_prompt:
                    generator.save_prompt(specs_prompt, args.save_specs_prompt)
                    print(f"Specs prompt saved to {args.save_specs_prompt}")
                
                # Generate the cluster specs
                cluster_specs = generator.generate_cluster_specs(
                    data, 
                    num_clusters=args.num_clusters, 
                    prompt_template=specs_template,
                    use_llm=args.use_llm
                )
                
                # Save the specs if requested
                if args.save_specs:
                    generator.save_clusters(cluster_specs, args.save_specs)
                    print(f"Cluster specifications saved to {args.save_specs}")
            
            # Load custom populate prompt template if provided
            populate_template = None
            if args.populate_template:
                populate_template = generator.load_prompt(args.populate_template)
            
            # Generate the populate prompt
            populate_prompt = generator.generate_population_prompt(
                data, 
                cluster_specs, 
                populate_template
            )
            
            # Save the populate prompt if requested
            if args.save_populate_prompt:
                generator.save_prompt(populate_prompt, args.save_populate_prompt)
                print(f"Population prompt saved to {args.save_populate_prompt}")
            
            # Populate the clusters
            populated_clusters = generator.populate_clusters(
                data, 
                cluster_specs, 
                prompt_template=populate_template,
                use_llm=args.use_llm
            )
            generator.save_clusters(populated_clusters, args.output)
            print(f"Clusters generated and saved to {args.output}")
        except Exception as e:
            print(f"Error generating clusters: {e}", file=sys.stderr)
            sys.exit(1)
    
    elif args.command == "eigenclusters":
        try:
            generator = ClusterGenerator(model_name=args.model)
            
            # Get additional context if provided
            additional_context = ""
            if args.context:
                additional_context = args.context
            elif args.context_file:
                with open(args.context_file, "r") as f:
                    additional_context = f.read()
            
            # Generate the eigenclusters prompt
            prompt = generator.generate_eigenclusters_prompt(
                None,
                args.start_year,
                args.end_year,
                args.periodicity,
                args.cluster_range,
                additional_context
            )
            
            # Save the prompt if requested
            if args.save_prompt:
                generator.save_prompt(prompt, args.save_prompt)
                print(f"Eigenclusters prompt saved to {args.save_prompt}")
            
            # Generate the eigenclusters
            eigenclusters = generator.generate_eigenclusters(
                args.start_year,
                args.end_year,
                args.periodicity,
                args.cluster_range,
                additional_context,
                use_llm=args.use_llm
            )
            generator.save_clusters(eigenclusters, args.output)
            print(f"Eigenclusters generated and saved to {args.output}")
            
            # Generate report if requested
            if args.report:
                with open(args.report, "w") as f:
                    # Write report header
                    f.write(f"# Eigenclusters Analysis ({args.start_year}-{args.end_year})\n\n")
                    
                    # Overview
                    f.write("## Overview\n\n")
                    f.write(f"Period: {eigenclusters['metadata']['period']}\n")
                    f.write(f"Interval: {eigenclusters['metadata']['interval']}\n")
                    f.write(f"Cluster Range: {eigenclusters['metadata']['cluster_range']}\n\n")
                    
                    # Top 20 clusters
                    f.write("## Top 20 Clusters\n\n")
                    for cluster in eigenclusters["metadata"]["top_20_clusters"]:
                        f.write(f"- {cluster}\n")
                    f.write("\n")
                    
                    # Detailed analysis
                    f.write("## Detailed Analysis\n\n")
                    for cluster_key, cluster in eigenclusters["clusters"].items():
                        f.write(f"### {cluster['name']}\n\n")
                        f.write(f"**Description:** {cluster['description']}\n\n")
                        
                        # Timeline
                        f.write("**Timeline:**\n\n")
                        f.write("| Year | Variance | Key Manifestations |\n")
                        f.write("|------|----------|--------------------|\n")
                        
                        for year, data in cluster["trajectory"].items():
                            manifestations = ", ".join(data["key_manifestations"][:2])  # Show first two for brevity
                            f.write(f"| {year} | {data['variance_explained']:.1f} | {manifestations} |\n")
                        
                        f.write("\n**Year-by-Year Analysis:**\n\n")
                        
                        for year, data in cluster["trajectory"].items():
                            f.write(f"**{year}:**\n\n")
                            f.write(f"{data['description']}\n\n")
                            f.write("Key manifestations:\n")
                            for manifestation in data["key_manifestations"]:
                                f.write(f"- {manifestation}\n")
                            f.write("\n")
                
                print(f"Report generated and saved to {args.report}")
        except Exception as e:
            print(f"Error generating eigenclusters: {e}", file=sys.stderr)
            sys.exit(1)
    
    elif args.command == "analyze":
        try:
            with open(args.input, "r") as f:
                clusters = json.load(f)

            critic = ClusterCritic(model_name=args.model)
            analysis = critic.analyze_clusters(clusters, use_llm=args.use_llm)
            critic.save_analysis(analysis, args.output)
            print(f"Analysis completed and saved to {args.output}")
        except Exception as e:
            print(f"Error analyzing clusters: {e}", file=sys.stderr)
            sys.exit(1)

    elif args.command == "export-ts":
        try:
            # Load the clusters data
            with open(args.input, "r") as f:
                clusters_data = json.load(f)

            # Create preset config
            preset_config = {
                "id": args.preset_id,
                "name": args.preset_name,
                "description": args.preset_desc,
                "start_year": args.start_year,
                "end_year": args.end_year,
                "cluster_start": args.cluster_start,
                "cluster_end": args.cluster_end,
                "periodicity": args.periodicity,
                "context": args.context,
                "model": args.model
            }

            # Create output directory if it doesn't exist
            os.makedirs(args.output_dir, exist_ok=True)

            # Export to TypeScript format
            json_path = export_to_typescript(
                clusters_data,
                preset_config,
                args.output_dir,
                create_ts_file=True,
                legacy_format=args.legacy_format
            )

            # Calculate TypeScript file path
            ts_path = os.path.join(args.output_dir, f"{args.preset_id}.ts")

            print(f"Exported to JSON: {json_path}")
            print(f"Exported to TypeScript: {ts_path}")

            # If TypeScript directory provided, copy files and update index
            if args.ts_dir:
                if not os.path.exists(args.ts_dir):
                    print(f"Warning: TypeScript directory {args.ts_dir} does not exist.")
                else:
                    # Copy files to TypeScript directory
                    copy_to_typescript_dir(json_path, ts_path, args.ts_dir)
                    print(f"Files copied to TypeScript directory: {args.ts_dir}")

                    # Update index.ts
                    updated = update_typescript_index(args.preset_id, args.ts_dir)
                    if updated:
                        print(f"Updated TypeScript index.ts file with preset: {args.preset_id}")
                    else:
                        print("Warning: Failed to update TypeScript index.ts file.")

        except Exception as e:
            print(f"Error exporting to TypeScript: {e}", file=sys.stderr)
            sys.exit(1)

    else:
        print("Please specify a command: specs, populate, generate, eigenclusters, analyze, or export-ts", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()