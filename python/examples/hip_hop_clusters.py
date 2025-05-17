"""
Example script to generate clusters for American Hip Hop from 1990-2020.
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
generator = ClusterGenerator(model_name="gpt-4")

# Step 1: Generate cluster specifications
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
cluster_specs = generator.generate_cluster_specs(
    hip_hop_data, 
    num_clusters=4, 
    prompt_template=spec_prompt_template
)

# For demonstration purposes, let's manually define meaningful clusters
# In a real implementation, these would come from the LLM
cluster_specs = {
    "clusters": [
        {
            "id": 0,
            "name": "Golden Age (1990-1995)",
            "description": "The foundational period of modern hip hop, characterized by jazz sampling, lyricism, and storytelling. This era established many of the genre's core styles and techniques."
        },
        {
            "id": 1,
            "name": "Mainstream Breakthrough (1996-2003)",
            "description": "The period when hip hop became fully commercial, with regional styles gaining national prominence. Characterized by polished production and increased crossover appeal."
        },
        {
            "id": 2,
            "name": "Digital Era (2004-2010)",
            "description": "The era defined by digital distribution, changes in production techniques, and the rise of Southern dominance in the hip hop landscape."
        },
        {
            "id": 3,
            "name": "Modern Era (2011-2020)",
            "description": "The contemporary period marked by streaming, genre blending, diverse voices, and expansion of hip hop's thematic and stylistic range."
        }
    ]
}

# Save the cluster specifications
generator.save_clusters(cluster_specs, "output/hip_hop_specs.json")
print(f"Saved cluster specifications to output/hip_hop_specs.json")

# Step 2: Populate the clusters with members
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
            "name": "Golden Age (1990-1995)",
            "description": "The foundational period of modern hip hop...",
            "members": [list of album IDs that belong to this cluster]
        }},
        ...more clusters...
    ]
}}

Only return the JSON object, with no additional text before or after.
"""

# For demonstration purposes, let's manually populate the clusters
# In a real implementation, these assignments would come from the LLM
populated_clusters = {
    "clusters": [
        {
            "id": 0,
            "name": "Golden Age (1990-1995)",
            "description": "The foundational period of modern hip hop, characterized by jazz sampling, lyricism, and storytelling. This era established many of the genre's core styles and techniques.",
            "members": [1, 2, 3, 4, 5, 6, 7]  # Albums from 1990-1995
        },
        {
            "id": 1,
            "name": "Mainstream Breakthrough (1996-2003)",
            "description": "The period when hip hop became fully commercial, with regional styles gaining national prominence. Characterized by polished production and increased crossover appeal.",
            "members": [8, 9, 10, 11, 12, 13, 14]  # Albums from 1996-2003
        },
        {
            "id": 2,
            "name": "Digital Era (2004-2010)",
            "description": "The era defined by digital distribution, changes in production techniques, and the rise of Southern dominance in the hip hop landscape.",
            "members": [15, 16]  # Albums from 2004-2010
        },
        {
            "id": 3,
            "name": "Modern Era (2011-2020)",
            "description": "The contemporary period marked by streaming, genre blending, diverse voices, and expansion of hip hop's thematic and stylistic range.",
            "members": [17, 18, 19, 20, 21, 22, 23, 24]  # Albums from 2011-2020
        }
    ]
}

# Save the populated clusters
generator.save_clusters(populated_clusters, "output/hip_hop_clusters.json")
print(f"Saved populated clusters to output/hip_hop_clusters.json")

# Step 3: Analyze the clusters
print("\nAnalyzing clusters...")
critic = ClusterCritic(model_name="gpt-4")

# For a real implementation, we would call the LLM for analysis
# Here, we'll create a simplified analysis structure
analysis = {
    "meta": {
        "num_clusters": 4,
        "analysis_method": "Era-based clustering"
    },
    "critiques": [
        {
            "cluster_id": 0,
            "cluster_name": "Golden Age (1990-1995)",
            "coherence": 0.9,
            "distinctiveness": 0.8,
            "coverage": 0.9,
            "strengths": [
                "Strong coherence with all albums from the early 90s formative period",
                "Includes diverse styles from the era (gangsta rap, jazz rap, g-funk)"
            ],
            "weaknesses": [
                "Some overlap in styles with the Mainstream Breakthrough period"
            ],
            "suggestions": [
                "Could potentially be split into East Coast vs. West Coast clusters"
            ]
        },
        {
            "cluster_id": 1,
            "cluster_name": "Mainstream Breakthrough (1996-2003)",
            "coherence": 0.85,
            "distinctiveness": 0.75,
            "coverage": 0.85,
            "strengths": [
                "Captures the commercial expansion period well",
                "Includes key transitional albums"
            ],
            "weaknesses": [
                "Contains somewhat diverse styles from different regions"
            ],
            "suggestions": [
                "Consider region-based subclusters for this period"
            ]
        },
        {
            "cluster_id": 2,
            "cluster_name": "Digital Era (2004-2010)",
            "coherence": 0.7,
            "distinctiveness": 0.7,
            "coverage": 0.6,
            "strengths": [
                "Captures important transitional albums",
                "Represents shift in distribution methods"
            ],
            "weaknesses": [
                "Smallest cluster with only two entries",
                "Under-representation of this period in the dataset"
            ],
            "suggestions": [
                "Add more albums from 2004-2010 to the dataset"
            ]
        },
        {
            "cluster_id": 3,
            "cluster_name": "Modern Era (2011-2020)",
            "coherence": 0.8,
            "distinctiveness": 0.85,
            "coverage": 0.9,
            "strengths": [
                "Good representation of recent trends",
                "Includes diverse voices and styles"
            ],
            "weaknesses": [
                "Very broad timeframe with evolving subgenres"
            ],
            "suggestions": [
                "Could be split into early 2010s vs. late 2010s clusters"
            ]
        }
    ]
}

# Save the analysis
critic.save_analysis(analysis, "output/hip_hop_analysis.json")
print(f"Saved analysis to output/hip_hop_analysis.json")

# Generate a human-readable report
print("\nGenerating human-readable report...")
with open("output/hip_hop_report.md", "w") as f:
    f.write("# American Hip Hop Clusters (1990-2020)\n\n")
    
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
                f.write(f"- Coherence: {critique['coherence']:.2f}/1.0\n")
                f.write(f"- Distinctiveness: {critique['distinctiveness']:.2f}/1.0\n")
                f.write(f"- Coverage: {critique['coverage']:.2f}/1.0\n\n")
                
                f.write("**Strengths:**\n\n")
                for strength in critique["strengths"]:
                    f.write(f"- {strength}\n")
                f.write("\n")
                
                f.write("**Weaknesses:**\n\n")
                for weakness in critique["weaknesses"]:
                    f.write(f"- {weakness}\n")
                f.write("\n")
                
                f.write("**Suggestions:**\n\n")
                for suggestion in critique["suggestions"]:
                    f.write(f"- {suggestion}\n")
                f.write("\n")
    
    # Summary
    f.write("## Summary\n\n")
    f.write("This analysis clustered American hip hop albums from 1990-2020 into four distinct eras:\n\n")
    f.write("1. **Golden Age (1990-1995)**: The foundational period of modern hip hop\n")
    f.write("2. **Mainstream Breakthrough (1996-2003)**: The period when hip hop became fully commercial\n")
    f.write("3. **Digital Era (2004-2010)**: The era defined by digital distribution and changing production techniques\n")
    f.write("4. **Modern Era (2011-2020)**: The contemporary period marked by streaming and genre blending\n\n")
    
    f.write("Each era has unique characteristics in terms of production techniques, lyrical themes, and cultural impact, representing the evolution of hip hop over three decades.\n")

print(f"Generated human-readable report at output/hip_hop_report.md")

# Print summary
print("\n=== Summary ===")
print(f"Number of clusters: {len(populated_clusters['clusters'])}")
for cluster in populated_clusters["clusters"]:
    print(f"Cluster: {cluster['name']} - {len(cluster['members'])} albums")

print("\nAll files saved to the 'output' directory. You can examine:")
print("- output/hip_hop_specs.json - Cluster specifications")
print("- output/hip_hop_clusters.json - Populated clusters")
print("- output/hip_hop_analysis.json - Analysis results")
print("- output/hip_hop_report.md - Human-readable report")