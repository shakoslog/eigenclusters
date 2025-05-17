"""
Example script demonstrating how to generate clusters for American Hip Hop with LLM integration.

This script shows how to use the EigenCluster package with LLM calls.
In a real implementation, you would provide a valid API key for the LLM.
"""

import json
import os
from eigencluster import ClusterGenerator, ClusterCritic

# Create output directory if it doesn't exist
os.makedirs("output", exist_ok=True)

# Load the hip hop data
print("Loading hip hop data...")
with open("examples/hip_hop_data.json", "r") as f:
    hip_hop_data = json.load(f)

# Initialize the generator
# In a real implementation, you would configure the LLM API key here
# os.environ["OPENAI_API_KEY"] = "your-api-key"
generator = ClusterGenerator(model_name="gpt-4")

# Step 1: Generate cluster specifications using the LLM
print("\nGenerating cluster specifications...")
spec_prompt_template = """
Given the following data about American Hip Hop from 1990-2020, create {num_clusters} distinct clusters.
Each cluster should represent a different era, style, or regional movement in hip hop during this period.
For each cluster, provide a meaningful name and description that captures what unifies the artists in that cluster.

Data: {data}

Format your response as a JSON object with this structure:
{{
    "clusters": [
        {{
            "id": 0,
            "name": "Era/Style/Region Name (e.g., 'Golden Age East Coast', 'Southern Trap Movement')",
            "description": "Detailed description of what unifies this cluster - era, style, themes, influence, etc."
        }},
        ...more clusters...
    ]
}}

Only return the JSON object, with no additional text before or after.
"""

# Generate cluster specifications for 4 clusters
# use_llm=True would use the actual LLM API if configured
cluster_specs = generator.generate_cluster_specs(
    hip_hop_data, 
    num_clusters=4, 
    prompt_template=spec_prompt_template,
    use_llm=False  # Set to True to use the actual LLM
)

# Save the cluster specifications
generator.save_clusters(cluster_specs, "output/hip_hop_specs_with_llm.json")
print(f"Saved cluster specifications to output/hip_hop_specs_with_llm.json")

# Step 2: Populate the clusters with members using the LLM
print("\nPopulating clusters with members...")
population_prompt_template = """
Assign each hip hop album to the most appropriate cluster based on its year, style, themes, and significance.
Each album should be assigned to exactly one cluster that best represents its era and style.

Data: {data}

Cluster Specifications:
{cluster_specs}

Format your response as a JSON object with this structure:
{{
    "clusters": [
        {{
            "id": 0,
            "name": "Cluster Name",
            "description": "Cluster description...",
            "members": [list of album IDs that belong to this cluster]
        }},
        ...more clusters...
    ]
}}

Only return the JSON object, with no additional text before or after.
"""

# Populate clusters
# use_llm=True would use the actual LLM API if configured
populated_clusters = generator.populate_clusters(
    hip_hop_data, 
    cluster_specs, 
    prompt_template=population_prompt_template,
    use_llm=False  # Set to True to use the actual LLM
)

# Save the populated clusters
generator.save_clusters(populated_clusters, "output/hip_hop_clusters_with_llm.json")
print(f"Saved populated clusters to output/hip_hop_clusters_with_llm.json")

# Step 3: Analyze the clusters using the LLM
print("\nAnalyzing clusters...")
critic = ClusterCritic(model_name="gpt-4")

# use_llm=True would use the actual LLM API if configured
analysis = critic.analyze_clusters(
    populated_clusters,
    use_llm=False  # Set to True to use the actual LLM
)

# Save the analysis
critic.save_analysis(analysis, "output/hip_hop_analysis_with_llm.json")
print(f"Saved analysis to output/hip_hop_analysis_with_llm.json")

# Generate a human-readable report
print("\nGenerating human-readable report...")
with open("output/hip_hop_report_with_llm.md", "w") as f:
    f.write("# American Hip Hop Clusters (1990-2020) with LLM Integration\n\n")
    
    # Overview
    f.write("## Overview\n\n")
    f.write(f"Total albums analyzed: {len(hip_hop_data['items'])}\n")
    f.write(f"Number of clusters: {len(populated_clusters['clusters'])}\n\n")
    
    # Cluster details
    f.write("## Clusters\n\n")
    for cluster in populated_clusters["clusters"]:
        f.write(f"### {cluster['name']}\n\n")
        f.write(f"**Description:** {cluster['description']}\n\n")
        f.write(f"**Number of albums:** {len(cluster['members'])}\n\n")
        
        # Albums in this cluster
        f.write("**Albums:**\n\n")
        for member_id in cluster["members"]:
            for item in hip_hop_data["items"]:
                if item["id"] == member_id:
                    f.write(f"- {item['artist']} - *{item['album']}* ({item['year']}) - {item['style']}\n")
        f.write("\n")
        
        # Critique
        for critique in analysis["critiques"]:
            if critique["cluster_id"] == cluster["id"]:
                f.write("**Analysis:**\n\n")
                if "coherence" in critique:
                    f.write(f"- Coherence: {critique['coherence']:.2f}/1.0\n")
                if "distinctiveness" in critique:
                    f.write(f"- Distinctiveness: {critique['distinctiveness']:.2f}/1.0\n")
                if "coverage" in critique:
                    f.write(f"- Coverage: {critique['coverage']:.2f}/1.0\n")
                f.write("\n")
                
                if "strengths" in critique:
                    f.write("**Strengths:**\n\n")
                    for strength in critique["strengths"]:
                        f.write(f"- {strength}\n")
                    f.write("\n")
                
                if "weaknesses" in critique:
                    f.write("**Weaknesses:**\n\n")
                    for weakness in critique["weaknesses"]:
                        f.write(f"- {weakness}\n")
                    f.write("\n")
                
                if "suggestions" in critique:
                    f.write("**Suggestions:**\n\n")
                    for suggestion in critique["suggestions"]:
                        f.write(f"- {suggestion}\n")
                    f.write("\n")
    
    # Summary
    f.write("## Summary\n\n")
    f.write("This analysis clustered American hip hop albums from 1990-2020 into four distinct groups.\n\n")
    f.write("Note: In this example, the analysis was done using placeholder data. In a real implementation, the package can be configured to use an actual LLM API for generating more meaningful clusters and analysis.\n")

print(f"Generated human-readable report at output/hip_hop_report_with_llm.md")

# Print summary
print("\n=== Summary ===")
print(f"Number of clusters: {len(populated_clusters['clusters'])}")
for cluster in populated_clusters["clusters"]:
    print(f"Cluster: {cluster['name']} - {len(cluster['members'])} members")

print("\nNote: This example used placeholder data. To use the actual LLM:")
print("1. Configure your LLM API key")
print("2. Set use_llm=True when calling the generator and critic methods")
print("\nAll files saved to the 'output' directory. You can examine:")
print("- output/hip_hop_specs_with_llm.json - Cluster specifications")
print("- output/hip_hop_clusters_with_llm.json - Populated clusters")
print("- output/hip_hop_analysis_with_llm.json - Analysis results")
print("- output/hip_hop_report_with_llm.md - Human-readable report")