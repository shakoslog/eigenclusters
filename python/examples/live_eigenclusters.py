"""
Example script demonstrating real-time eigenclusters generation with the Anthropic API.
"""

import json
import os
from eigencluster import ClusterGenerator, ClusterCritic

# Create output directory if it doesn't exist
os.makedirs("output", exist_ok=True)

# Set the Anthropic API key - replace with your actual API key if needed


# Initialize the generator with the API key
generator = ClusterGenerator(model_name="claude-3-opus-20240229", api_key=API_KEY)

# Generate eigenclusters for AI Ethics from 2000-2020
print("\nGenerating eigenclusters for AI Ethics (2000-2020)...")

# Specific context for the analysis
ai_ethics_context = """
Focus on AI Ethics and its evolution from 2000 to 2020.
Consider aspects such as:
- Key ethical frameworks and principles
- Major controversies and debates
- Institutional and policy developments
- Cultural perceptions and representations
- Key thinkers, papers, and cultural touchpoints
"""

# Generate eigenclusters with the Anthropic API
try:
    eigenclusters = generator.generate_eigenclusters(
        start_year=2000,
        end_year=2020,
        periodicity=10,  # analyze every 10 years to reduce the number of API calls
        cluster_range="1-3",  # top 3 clusters to reduce the amount of content to generate
        additional_context=ai_ethics_context,
        use_llm=True  # Use the actual LLM API
    )
    
    # Save the eigenclusters
    generator.save_clusters(eigenclusters, "output/ai_ethics_live_eigenclusters.json")
    print(f"Saved eigenclusters to output/ai_ethics_live_eigenclusters.json")
    
    # Check if we got valid metadata and if clusters is a dictionary
    if not eigenclusters.get("metadata") or not isinstance(eigenclusters.get("clusters"), dict):
        print("Warning: Generated eigenclusters has invalid format. Using fallback format.")

        # Create proper clusters dictionary if it's a list
        clusters_dict = {}
        if isinstance(eigenclusters.get("clusters"), list):
            for i, cluster in enumerate(eigenclusters.get("clusters", [])):
                cluster_key = f"{i+1}_fallback_cluster"
                clusters_dict[cluster_key] = {
                    "name": cluster.get("name", f"Fallback Cluster {i+1}"),
                    "description": cluster.get("description", f"This is a fallback cluster due to formatting error"),
                    "trajectory": {
                        "1990": {
                            "variance_explained": 20.0 - i * 2,
                            "description": f"Description for cluster {i+1} in 1990.",
                            "key_manifestations": [
                                f"Manifestation 1 for cluster {i+1} in 1990",
                                f"Manifestation 2 for cluster {i+1} in 1990",
                                f"Manifestation 3 for cluster {i+1} in 1990",
                                f"Manifestation 4 for cluster {i+1} in 1990"
                            ]
                        },
                        "2000": {
                            "variance_explained": 20.0 - i * 2,
                            "description": f"Description for cluster {i+1} in 2000.",
                            "key_manifestations": [
                                f"Manifestation 1 for cluster {i+1} in 2000",
                                f"Manifestation 2 for cluster {i+1} in 2000",
                                f"Manifestation 3 for cluster {i+1} in 2000",
                                f"Manifestation 4 for cluster {i+1} in 2000"
                            ]
                        },
                        "2010": {
                            "variance_explained": 20.0 - i * 2,
                            "description": f"Description for cluster {i+1} in 2010.",
                            "key_manifestations": [
                                f"Manifestation 1 for cluster {i+1} in 2010",
                                f"Manifestation 2 for cluster {i+1} in 2010",
                                f"Manifestation 3 for cluster {i+1} in 2010",
                                f"Manifestation 4 for cluster {i+1} in 2010"
                            ]
                        },
                        "2020": {
                            "variance_explained": 20.0 - i * 2,
                            "description": f"Description for cluster {i+1} in 2020.",
                            "key_manifestations": [
                                f"Manifestation 1 for cluster {i+1} in 2020",
                                f"Manifestation 2 for cluster {i+1} in 2020",
                                f"Manifestation 3 for cluster {i+1} in 2020",
                                f"Manifestation 4 for cluster {i+1} in 2020"
                            ]
                        }
                    }
                }

        # Create properly formatted eigenclusters
        eigenclusters = {
            "metadata": {
                "period": "1990-2020",
                "interval": "10 years",
                "cluster_range": "1-3",
                "measurement": "relative cultural variance explained (0-100)",
                "top_20_clusters": [
                    f"{i}_fallback_cluster [{'↗' if i % 3 == 0 else '↘' if i % 3 == 1 else '→'}] ({(20-i+1):0.1f}%)"
                    for i in range(1, 21)
                ]
            },
            "clusters": clusters_dict if clusters_dict else eigenclusters.get("clusters", {})
        }
        generator.save_clusters(eigenclusters, "output/ai_ethics_live_eigenclusters_fixed.json")
        print(f"Saved fixed eigenclusters to output/ai_ethics_live_eigenclusters_fixed.json")
    
    # Generate a human-readable report
    print("\nGenerating human-readable report...")
    with open("output/ai_ethics_live_eigenclusters_report.md", "w") as f:
        f.write("# AI Ethics Eigenclusters (2000-2020) - Live Analysis\n\n")
        
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
    
    print(f"Generated human-readable report at output/ai_ethics_live_eigenclusters_report.md")

    # Print summary
    print("\n=== Summary ===")
    print("Generated real-time eigenclusters for AI Ethics (2000-2020)")
    print(f"Number of clusters: {len(eigenclusters['clusters'])}")
    print("\nFiles saved to the 'output' directory.")
    print("- output/ai_ethics_live_eigenclusters.json")
    print("- output/ai_ethics_live_eigenclusters_report.md")

except Exception as e:
    print(f"Error generating eigenclusters: {e}")
    print("Using fallback placeholder data instead.")
    
    # Generate placeholder eigenclusters
    eigenclusters = generator.generate_eigenclusters(
        start_year=2000,
        end_year=2020,
        periodicity=10,
        cluster_range="1-3",
        additional_context=ai_ethics_context,
        use_llm=False  # Use placeholder data
    )
    
    # Save the placeholder eigenclusters
    generator.save_clusters(eigenclusters, "output/ai_ethics_placeholder_eigenclusters.json")
    print(f"Saved placeholder eigenclusters to output/ai_ethics_placeholder_eigenclusters.json")

    # Generate a human-readable report for the placeholder data
    print("\nGenerating human-readable report with placeholder data...")
    with open("output/ai_ethics_placeholder_eigenclusters_report.md", "w") as f:
        f.write("# AI Ethics Eigenclusters (2000-2020) - Placeholder Data\n\n")
        
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
    
    print(f"Generated human-readable report with placeholder data at output/ai_ethics_placeholder_eigenclusters_report.md")

    # Print summary
    print("\n=== Summary ===")
    print("Generated placeholder eigenclusters for AI Ethics (2000-2020)")
    print(f"Number of clusters: {len(eigenclusters['clusters'])}")
    print("\nFiles saved to the 'output' directory.")
    print("- output/ai_ethics_placeholder_eigenclusters.json")
    print("- output/ai_ethics_placeholder_eigenclusters_report.md")