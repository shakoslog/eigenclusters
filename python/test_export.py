#!/usr/bin/env python3
"""
Quick test script to generate a simple eigencluster dataset and export it to TypeScript.
"""

import os
import json
from pathlib import Path

# Sample eigencluster data structure
test_data = {
    "metadata": {
        "period": "1950-2020",
        "interval": "10 years",
        "cluster_range": "1-3",
        "measurement": "relative cultural variance explained (0-100)",
        "top_20_clusters": [
            "Technological Innovation",
            "Political Polarization",
            "Economic Globalization"
        ]
    },
    "clusters": {
        "1_tech_innovation": {
            "name": "Technological Innovation",
            "description": "The emergence and evolution of new technologies that reshape society, communication, and daily life.",
            "trajectory": {
                "1950": {
                    "variance_explained": 15,
                    "description": "Early computing and television adoption begins to transform communication patterns.",
                    "key_manifestations": [
                        "First commercial computers",
                        "Television becomes mainstream medium",
                        "Early space exploration efforts"
                    ]
                },
                "1960": {
                    "variance_explained": 20,
                    "description": "Space race and early computer technology drive technological advancement.",
                    "key_manifestations": [
                        "Moon landing and space race",
                        "Mainframe computers in business",
                        "Communications satellites launched"
                    ]
                },
                "1970": {
                    "variance_explained": 22,
                    "description": "Microprocessor invention leads to personal computing revolution beginnings.",
                    "key_manifestations": [
                        "First microprocessors",
                        "Early personal computers",
                        "First video games"
                    ]
                },
                "1980": {
                    "variance_explained": 30,
                    "description": "Personal computing revolution and early internet adoption begins.",
                    "key_manifestations": [
                        "IBM PC and Apple computers",
                        "Early internet and ARPANET",
                        "Mobile phone technology emergence"
                    ]
                },
                "1990": {
                    "variance_explained": 45,
                    "description": "World Wide Web created, internet becomes commercialized and begins to transform society.",
                    "key_manifestations": [
                        "World Wide Web invention",
                        "Internet commercialization",
                        "Cell phones become mainstream"
                    ]
                },
                "2000": {
                    "variance_explained": 60,
                    "description": "Digital revolution accelerates with social media and mobile internet.",
                    "key_manifestations": [
                        "Smartphone revolution",
                        "Social media platforms emerge",
                        "Broadband internet adoption"
                    ]
                },
                "2010": {
                    "variance_explained": 75,
                    "description": "Mobile computing and AI become dominant technological forces.",
                    "key_manifestations": [
                        "AI and machine learning advances",
                        "Mobile-first internet usage",
                        "Cloud computing dominance"
                    ]
                },
                "2020": {
                    "variance_explained": 80,
                    "description": "AI integration accelerates across all aspects of society and economy.",
                    "key_manifestations": [
                        "Generative AI revolution",
                        "Virtual and augmented reality",
                        "Autonomous technology adoption"
                    ]
                }
            }
        },
        "2_political_polarization": {
            "name": "Political Polarization",
            "description": "The increasing division and hardening of ideological positions in political discourse.",
            "trajectory": {
                "1950": {
                    "variance_explained": 20,
                    "description": "Cold War tensions establish ideological divides internationally.",
                    "key_manifestations": [
                        "Cold War politics",
                        "Anti-communist sentiment",
                        "Post-WWII political realignment"
                    ]
                },
                "1960": {
                    "variance_explained": 30,
                    "description": "Civil rights movement and Vietnam War create deep political divisions.",
                    "key_manifestations": [
                        "Civil rights movement",
                        "Vietnam War protests",
                        "Counterculture movement"
                    ]
                },
                "1970": {
                    "variance_explained": 25,
                    "description": "Post-Watergate disillusionment affects political trust.",
                    "key_manifestations": [
                        "Watergate scandal fallout",
                        "Energy crisis politics",
                        "Environmental movement emergence"
                    ]
                },
                "1980": {
                    "variance_explained": 35,
                    "description": "Reagan revolution and culture wars heighten partisan divides.",
                    "key_manifestations": [
                        "Reagan revolution",
                        "Religious right political influence",
                        "Culture war beginnings"
                    ]
                },
                "1990": {
                    "variance_explained": 40,
                    "description": "Partisan media emerges, increasing political division.",
                    "key_manifestations": [
                        "Talk radio political influence",
                        "Cable news polarization",
                        "Clinton impeachment"
                    ]
                },
                "2000": {
                    "variance_explained": 50,
                    "description": "Post-9/11 and Iraq War deepen partisan divides.",
                    "key_manifestations": [
                        "War on Terror politics",
                        "Red state/blue state division",
                        "Partisan media ecosystem growth"
                    ]
                },
                "2010": {
                    "variance_explained": 65,
                    "description": "Social media amplifies polarization and partisanship.",
                    "key_manifestations": [
                        "Social media echo chambers",
                        "Tea Party and progressive movements",
                        "Increasing congressional gridlock"
                    ]
                },
                "2020": {
                    "variance_explained": 75,
                    "description": "Deep partisan divides on major issues create parallel political realities.",
                    "key_manifestations": [
                        "COVID-19 response politicization",
                        "Electoral process disputes",
                        "Information ecosystem fragmentation"
                    ]
                }
            }
        },
        "3_economic_globalization": {
            "name": "Economic Globalization",
            "description": "The increasing integration of economies around the world through trade, investment, and interdependence.",
            "trajectory": {
                "1950": {
                    "variance_explained": 15,
                    "description": "Post-war economic institutions establish framework for global trade.",
                    "key_manifestations": [
                        "Bretton Woods system",
                        "GATT formation",
                        "Marshall Plan implementation"
                    ]
                },
                "1960": {
                    "variance_explained": 20,
                    "description": "Multinational corporations expand global reach and influence.",
                    "key_manifestations": [
                        "Multinational corporate growth",
                        "European Common Market formation",
                        "Development of global supply chains"
                    ]
                },
                "1970": {
                    "variance_explained": 25,
                    "description": "Oil crisis reveals global economic interdependence vulnerabilities.",
                    "key_manifestations": [
                        "OPEC oil embargoes",
                        "Nixon shock and gold standard abandonment",
                        "Stagflation"
                    ]
                },
                "1980": {
                    "variance_explained": 35,
                    "description": "Neoliberal policies promote free trade and financial deregulation.",
                    "key_manifestations": [
                        "Thatcher-Reagan economics",
                        "Free trade promotion",
                        "Financial market deregulation"
                    ]
                },
                "1990": {
                    "variance_explained": 50,
                    "description": "End of Cold War accelerates global economic integration.",
                    "key_manifestations": [
                        "WTO formation",
                        "NAFTA implementation",
                        "Emerging market integration"
                    ]
                },
                "2000": {
                    "variance_explained": 65,
                    "description": "Digital revolution enables deeper global economic integration.",
                    "key_manifestations": [
                        "China's WTO entry",
                        "Euro currency introduction",
                        "Outsourcing and offshoring acceleration"
                    ]
                },
                "2010": {
                    "variance_explained": 70,
                    "description": "Backlash against globalization emerges as inequality concerns grow.",
                    "key_manifestations": [
                        "Nationalist economic policies",
                        "Brexit and EU tensions",
                        "Trade wars and tariffs"
                    ]
                },
                "2020": {
                    "variance_explained": 60,
                    "description": "Pandemic disrupts global supply chains, prompting reconsideration of economic interdependence.",
                    "key_manifestations": [
                        "Supply chain restructuring",
                        "Onshoring and near-shoring trends",
                        "Digital globalization acceleration"
                    ]
                }
            }
        }
    }
}

# Save this to a temporary JSON file
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)
json_path = os.path.join(output_dir, "test_clusters.json")

with open(json_path, "w") as f:
    json.dump(test_data, f, indent=2)

print(f"Test data saved to {json_path}")

# Now export this to TypeScript using the CLI
import subprocess

# Get the path to the TypeScript presets directory
ts_dir = Path("../src/lib/presets").resolve()

# Make sure the directory exists
if not ts_dir.exists():
    print(f"Warning: TypeScript directory {ts_dir} does not exist. Creating it...")
    ts_dir.mkdir(parents=True, exist_ok=True)

# Run the export-ts command
cmd = [
    "eigencluster", "export-ts",
    "--input", json_path,
    "--preset-id", "test-trends",
    "--preset-name", "Test Cultural Trends",
    "--preset-desc", "A test dataset showing major cultural trends from 1950-2020",
    "--start-year", "1950",
    "--end-year", "2020",
    "--cluster-start", "1",
    "--cluster-end", "3",
    "--periodicity", "10",
    "--ts-dir", str(ts_dir)
]

print("Running command:", " ".join(cmd))
subprocess.run(cmd)