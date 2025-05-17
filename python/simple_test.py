#!/usr/bin/env python3
"""
Small test script for generating a minimal eigencluster dataset.
"""

import os
import json
from pathlib import Path

# Simple eigencluster data with just 2 clusters and 3 time periods
simple_data = {
    "metadata": {
        "period": "2000-2020",
        "interval": "10 years",
        "cluster_range": "1-2",
        "measurement": "relative cultural variance explained (0-100)",
        "top_20_clusters": [
            "Digital Transformation",
            "Climate Awareness"
        ]
    },
    "clusters": {
        "1_digital_transformation": {
            "name": "Digital Transformation",
            "description": "The shift from analog to digital technology across society and business.",
            "trajectory": {
                "2000": {
                    "variance_explained": 40,
                    "description": "Early web technologies begin to transform business and communication.",
                    "key_manifestations": [
                        "Dot-com bubble",
                        "E-commerce emerges",
                        "Early social networks"
                    ]
                },
                "2010": {
                    "variance_explained": 70,
                    "description": "Mobile revolution changes how people access digital services.",
                    "key_manifestations": [
                        "Smartphone ubiquity",
                        "App economy growth",
                        "Cloud computing dominance"
                    ]
                },
                "2020": {
                    "variance_explained": 85,
                    "description": "AI and automation begin to transform all industries.",
                    "key_manifestations": [
                        "Generative AI",
                        "Remote work transition",
                        "Digital healthcare"
                    ]
                }
            }
        },
        "2_climate_awareness": {
            "name": "Climate Awareness",
            "description": "Growing recognition of climate change as a global crisis requiring action.",
            "trajectory": {
                "2000": {
                    "variance_explained": 20,
                    "description": "Early mainstream awareness of climate change issues.",
                    "key_manifestations": [
                        "Kyoto Protocol debates",
                        "Emerging green technologies",
                        "Environmental documentaries"
                    ]
                },
                "2010": {
                    "variance_explained": 45,
                    "description": "Climate activism grows among younger generations.",
                    "key_manifestations": [
                        "Paris Climate Agreement",
                        "Renewable energy growth",
                        "Climate protest movements"
                    ]
                },
                "2020": {
                    "variance_explained": 75,
                    "description": "Climate action becomes mainstream policy priority globally.",
                    "key_manifestations": [
                        "Net-zero commitments",
                        "Clean energy transition",
                        "Climate adaptation planning"
                    ]
                }
            }
        }
    }
}

# Create output directory if it doesn't exist
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# Save JSON file
json_path = os.path.join(output_dir, "simple_test.json")
with open(json_path, "w") as f:
    json.dump(simple_data, f, indent=2)

print(f"Created simple test data at {json_path}")

# Run the export-ts command
import subprocess

# Get the path to the TypeScript presets directory
ts_dir = Path("../src/lib/presets").resolve()

# Run the export command with legacy format for compatibility
cmd = [
    "eigencluster", "export-ts",
    "--input", json_path,
    "--preset-id", "mini-trends-legacy",
    "--preset-name", "Mini Recent Trends (Legacy)",
    "--preset-desc", "A minimal dataset using legacy format (2000-2020)",
    "--start-year", "2000",
    "--end-year", "2020",
    "--cluster-start", "1",
    "--cluster-end", "2",
    "--periodicity", "10",
    "--ts-dir", str(ts_dir),
    "--legacy-format"  # Use legacy format
]

print("Running export command...")
subprocess.run(cmd)
print("Done!")