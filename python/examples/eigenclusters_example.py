"""
Example script demonstrating how to generate eigenclusters.

This script shows how to use the specialized eigenculture prompt for cultural analysis.
"""

import json
import os
from eigencluster import ClusterGenerator

# Create output directory if it doesn't exist
os.makedirs("output", exist_ok=True)

# Initialize the generator
# In a real implementation, you would configure the LLM API key here
# os.environ["OPENAI_API_KEY"] = "your-api-key"
generator = ClusterGenerator(model_name="gpt-4")

# Generate eigenclusters for American Hip Hop from 1990-2020
print("\nGenerating eigenclusters for American Hip Hop (1990-2020)...")

# Specific context for the analysis
hip_hop_context = """
Focus on American Hip Hop music and culture from 1990 to 2020.
Consider aspects such as:
- Regional movements (East Coast, West Coast, South, Midwest)
- Stylistic evolution and subgenres
- Cultural and social impact
- Technological changes in production and distribution
- Key artists, albums, and cultural touchpoints
"""

# Generate eigenclusters
# use_llm=True would use the actual LLM API if configured
eigenclusters = generator.generate_eigenclusters(
    start_year=1990,
    end_year=2020,
    periodicity=5,  # analyze every 5 years
    cluster_range="1-4",  # top 4 clusters
    additional_context=hip_hop_context,
    use_llm=False  # Set to True to use the actual LLM
)

# Save the eigenclusters
generator.save_clusters(eigenclusters, "output/hip_hop_eigenclusters.json")
print(f"Saved eigenclusters to output/hip_hop_eigenclusters.json")

# Generate a human-readable report
print("\nGenerating human-readable report...")
with open("output/hip_hop_eigenclusters_report.md", "w") as f:
    f.write("# American Hip Hop Eigenclusters (1990-2020)\n\n")
    
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

print(f"Generated human-readable report at output/hip_hop_eigenclusters_report.md")

# Generate eigenclusters for another topic to show versatility
print("\nGenerating eigenclusters for Digital Technology (2000-2023)...")

# Specific context for technology analysis
tech_context = """
Focus on digital technology evolution from 2000 to 2023.
Consider aspects such as:
- Social media platforms and their cultural influence
- Mobile technology and apps
- Artificial intelligence and machine learning
- Privacy and security concerns
- Digital transformation of industries
"""

# Generate eigenclusters for technology
eigenclusters_tech = generator.generate_eigenclusters(
    start_year=2000,
    end_year=2023,
    periodicity=3,  # analyze every 3 years
    cluster_range="1-3",  # top 3 clusters
    additional_context=tech_context,
    use_llm=False  # Set to True to use the actual LLM
)

# Save the technology eigenclusters
generator.save_clusters(eigenclusters_tech, "output/tech_eigenclusters.json")
print(f"Saved technology eigenclusters to output/tech_eigenclusters.json")

# Print summary
print("\n=== Summary ===")
print("Generated eigenclusters for two domains:")
print("1. American Hip Hop (1990-2020)")
print("2. Digital Technology (2000-2023)")
print("\nNote: These are placeholder results. To get actual eigenclusters:")
print("1. Configure your LLM API key")
print("2. Set use_llm=True when calling generate_eigenclusters")
print("\nAll files saved to the 'output' directory.")