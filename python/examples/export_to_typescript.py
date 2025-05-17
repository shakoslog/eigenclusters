#!/usr/bin/env python3
"""
Example script demonstrating how to export eigenclusters data to TypeScript format.

This script:
1. Generates eigenculster data for a specified time period
2. Exports the data to TypeScript format
3. Updates the TypeScript preset registry

Usage:
python export_to_typescript.py --ts-dir ../src/lib/presets
"""

import argparse
import os
import sys
from pathlib import Path

from eigencluster import ClusterGenerator
from eigencluster.export import (
    export_to_typescript,
    update_typescript_index,
    copy_to_typescript_dir,
)


def parse_args():
    parser = argparse.ArgumentParser(description="Export eigenclusters to TypeScript")
    parser.add_argument(
        "--preset-id",
        default="example-clusters",
        help="ID for the preset (used for filenames)",
    )
    parser.add_argument(
        "--preset-name",
        default="Example Clusters",
        help="Human-readable name for the preset",
    )
    parser.add_argument(
        "--start-year", 
        type=int, 
        default=1900, 
        help="Start year for analysis"
    )
    parser.add_argument(
        "--end-year", 
        type=int, 
        default=2020, 
        help="End year for analysis"
    )
    parser.add_argument(
        "--periodicity", 
        type=int, 
        default=20, 
        help="Year intervals"
    )
    parser.add_argument(
        "--cluster-range", 
        default="1-5", 
        help="Range of clusters"
    )
    parser.add_argument(
        "--context",
        default="American cultural and political trends",
        help="Context for analysis",
    )
    parser.add_argument(
        "--output-dir",
        default="output",
        help="Directory to save output files",
    )
    parser.add_argument(
        "--ts-dir",
        help="TypeScript presets directory path. If provided, copies files there and updates index.ts",
    )
    parser.add_argument(
        "--model",
        default="gpt-4",
        help="Model to use for generation",
    )
    parser.add_argument(
        "--use-llm",
        action="store_true",
        help="Use LLM API for generation (requires API key)",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    
    # Create output directory if it doesn't exist
    os.makedirs(args.output_dir, exist_ok=True)
    
    # 1. Generate eigencluster data
    print(f"Generating eigenclusters for {args.start_year}-{args.end_year}...")
    generator = ClusterGenerator(model_name=args.model)
    
    # Parse cluster range
    try:
        cluster_range = args.cluster_range
    except ValueError:
        print(f"Invalid cluster range format: {args.cluster_range}")
        sys.exit(1)
    
    # Generate eigenclusters
    eigenclusters = generator.generate_eigenclusters(
        args.start_year,
        args.end_year,
        args.periodicity,
        cluster_range,
        args.context,
        use_llm=args.use_llm
    )
    
    # Save raw eigenclusters file
    raw_output_path = os.path.join(args.output_dir, f"{args.preset_id}_raw.json")
    generator.save_clusters(eigenclusters, raw_output_path)
    print(f"Raw eigenclusters saved to {raw_output_path}")
    
    # 2. Export to TypeScript
    print("Exporting to TypeScript format...")
    
    # Create preset config
    preset_config = {
        "id": args.preset_id,
        "name": args.preset_name,
        "description": f"Analysis of {args.context} from {args.start_year} to {args.end_year}",
        "start_year": str(args.start_year),
        "end_year": str(args.end_year),
        "cluster_start": int(cluster_range.split("-")[0]),
        "cluster_end": int(cluster_range.split("-")[1]),
        "periodicity": args.periodicity,
        "context": args.context,
        "model": args.model
    }
    
    # Export to TypeScript format
    json_path = export_to_typescript(
        eigenclusters,
        preset_config,
        args.output_dir,
        create_ts_file=True
    )
    
    # Calculate TypeScript file path
    ts_path = os.path.join(args.output_dir, f"{args.preset_id}.ts")
    
    print(f"Exported to JSON: {json_path}")
    print(f"Exported to TypeScript: {ts_path}")
    
    # 3. If TypeScript directory provided, copy files and update index
    if args.ts_dir:
        if not os.path.exists(args.ts_dir):
            print(f"Warning: TypeScript directory {args.ts_dir} does not exist. Creating it...")
            os.makedirs(args.ts_dir, exist_ok=True)
        
        # Copy files to TypeScript directory
        copy_to_typescript_dir(json_path, ts_path, args.ts_dir)
        print(f"Files copied to TypeScript directory: {args.ts_dir}")
        
        # Update index.ts
        updated = update_typescript_index(args.preset_id, args.ts_dir)
        if updated:
            print(f"Updated TypeScript index.ts file with preset: {args.preset_id}")
        else:
            print("Warning: Failed to update TypeScript index.ts file.")
    
    print("\nProcess completed successfully!")
    print(f"\nTo use your new preset in the web app, ensure the TypeScript files are in the src/lib/presets directory.")


if __name__ == "__main__":
    main()