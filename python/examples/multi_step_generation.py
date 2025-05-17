"""
Multi-step cluster generation example for the EigenCluster package.

This example demonstrates the multi-step process of:
1. Generating cluster specifications
2. Populating the clusters with members
"""

import json
import os
from eigencluster import ClusterGenerator, ClusterCritic

# Create output directory if it doesn't exist
os.makedirs("output", exist_ok=True)

# Sample data
data = {
    "items": [
        {"id": 1, "text": "Apple is a tech company based in California"},
        {"id": 2, "text": "Microsoft develops Windows operating system"},
        {"id": 3, "text": "Google is known for its search engine"},
        {"id": 4, "text": "Amazon is an e-commerce and cloud computing company"},
        {"id": 5, "text": "Tesla makes electric vehicles and clean energy products"},
        {"id": 6, "text": "Facebook is a social media platform"},
        {"id": 7, "text": "Twitter is a social networking service"},
        {"id": 8, "text": "Ford is an American automobile manufacturer"},
        {"id": 9, "text": "Toyota is a Japanese car company"},
        {"id": 10, "text": "Netflix is a streaming service for movies and shows"}
    ]
}

# Create a generator
generator = ClusterGenerator(model_name="gpt-4")

# Step 1: Generate cluster specifications (without members)
print("\n=== Step 1: Generate Cluster Specifications ===")
specs_prompt = generator.generate_cluster_specs_prompt(data, num_clusters=3)
generator.save_prompt(specs_prompt, "output/specs_prompt.txt")
print("Specs prompt saved to output/specs_prompt.txt")

cluster_specs = generator.generate_cluster_specs(data, num_clusters=3)
generator.save_clusters(cluster_specs, "output/cluster_specs.json")
print("Cluster specifications saved to output/cluster_specs.json")

# Display the specifications
print("\nGenerated cluster specifications:")
for cluster in cluster_specs.get("clusters", []):
    print(f"  Cluster {cluster.get('id')}: {cluster.get('name')} - {cluster.get('description')}")

# Step 2: Populate clusters with members
print("\n=== Step 2: Populate Clusters with Members ===")
population_prompt = generator.generate_population_prompt(data, cluster_specs)
generator.save_prompt(population_prompt, "output/population_prompt.txt")
print("Population prompt saved to output/population_prompt.txt")

populated_clusters = generator.populate_clusters(data, cluster_specs)
generator.save_clusters(populated_clusters, "output/populated_clusters.json")
print("Populated clusters saved to output/populated_clusters.json")

# Display the populated clusters
print("\nPopulated clusters:")
for cluster in populated_clusters.get("clusters", []):
    member_count = len(cluster.get("members", []))
    print(f"  Cluster {cluster.get('id')}: {cluster.get('name')} - {member_count} members")
    for member_id in cluster.get("members", []):
        for item in data["items"]:
            if item["id"] == member_id:
                print(f"    - Item {member_id}: {item['text']}")
                break

# Step 3: Analyze the clusters
print("\n=== Step 3: Analyze the Clusters ===")
critic = ClusterCritic(model_name="gpt-4")
analysis = critic.analyze_clusters(populated_clusters)
critic.save_analysis(analysis, "output/cluster_analysis.json")
print("Cluster analysis saved to output/cluster_analysis.json")

# Summary
print("\n=== Summary ===")
print(f"Total clusters: {len(populated_clusters.get('clusters', []))}")
total_members = sum(len(cluster.get("members", [])) for cluster in populated_clusters.get("clusters", []))
print(f"Total members assigned: {total_members} out of {len(data['items'])}")

# Showcase combining the steps in one method call
print("\n=== Bonus: One-step generation using existing specs ===")
combined_clusters = generator.generate_clusters(data, cluster_specs=cluster_specs)
generator.save_clusters(combined_clusters, "output/combined_clusters.json")
print("Combined clusters saved to output/combined_clusters.json")