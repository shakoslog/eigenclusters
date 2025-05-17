"""
Basic usage example for the EigenCluster package.
"""

import json
import os
from eigencluster import ClusterGenerator, ClusterCritic

# Create output directory if it doesn't exist
os.makedirs("output", exist_ok=True)

# Sample data
data = {
    "items": [
        {"id": 1, "text": "This is the first item"},
        {"id": 2, "text": "This is the second item"},
        {"id": 3, "text": "This is the third item"},
        {"id": 4, "text": "This is the fourth item"},
        {"id": 5, "text": "This is the fifth item"},
    ]
}

# Save the sample data
with open("output/sample_data.json", "w") as f:
    json.dump(data, f, indent=2)
print("Sample data saved to output/sample_data.json")

# Create a generator
generator = ClusterGenerator(model_name="gpt-4")

# Generate clusters in one step (combined operation)
print("\n=== One-Step Cluster Generation ===")
clusters = generator.generate_clusters(data, num_clusters=2)
generator.save_clusters(clusters, "output/clusters.json")
print("Clusters generated and saved to output/clusters.json")

# Analyze the clusters
print("\n=== Cluster Analysis ===")
critic = ClusterCritic(model_name="gpt-4")
analysis = critic.analyze_clusters(clusters)
critic.save_analysis(analysis, "output/analysis.json")
print("Analysis completed and saved to output/analysis.json")

# Print a summary
print("\n=== Summary ===")
print(f"Number of clusters: {len(clusters.get('clusters', []))}")
for i, cluster in enumerate(clusters.get("clusters", [])):
    print(f"Cluster {i}: {cluster.get('name')} - {len(cluster.get('members', []))} members")
    if "description" in cluster:
        print(f"  Description: {cluster.get('description')}")
    print(f"  Members: {', '.join(str(m) for m in cluster.get('members', []))}")