"""
EigenCluster Critic Module

This module provides functionality for analyzing and critiquing clusters.
"""

import json
from eigencluster.models import LLMCaller


class ClusterCritic:
    """Analyze and critique generated clusters."""
    
    def __init__(self, model_name="claude-3-opus-20240229", api_key=None):
        """
        Initialize the ClusterCritic.
        
        Args:
            model_name (str): Name of the model to use for criticism.
            api_key (str, optional): API key for the LLM. If not provided,
                                     will look for ANTHROPIC_API_KEY in environment.
        """
        self.model_name = model_name
        self.llm_caller = LLMCaller(model_name=model_name, api_key=api_key)
        
        # Default prompt template for cluster analysis
        self._default_analysis_template = """
        Analyze the following clusters and provide a critique of their quality, coherence, and distinctiveness.
        For each cluster, evaluate how well the members fit the cluster theme and suggest improvements.
        
        Clusters: {clusters}
        
        Format your response as a JSON object with this structure:
        {{
            "meta": {{
                "num_clusters": <number_of_clusters>,
                "analysis_method": "LLM-based evaluation"
            }},
            "critiques": [
                {{
                    "cluster_id": <cluster_id>,
                    "cluster_name": "<cluster_name>",
                    "coherence": <score_from_0_to_1>,
                    "distinctiveness": <score_from_0_to_1>,
                    "coverage": <score_from_0_to_1>,
                    "strengths": ["<strength_1>", "<strength_2>", ...],
                    "weaknesses": ["<weakness_1>", "<weakness_2>", ...],
                    "suggestions": ["<suggestion_1>", "<suggestion_2>", ...]
                }},
                ...more critiques...
            ]
        }}
        
        Only return the JSON object, with no additional text before or after.
        """
    
    def generate_analysis_prompt(self, clusters, prompt_template=None):
        """
        Generate a prompt for the LLM to analyze clusters.
        
        Args:
            clusters (dict): Cluster data to analyze
            prompt_template (str, optional): Custom prompt template
            
        Returns:
            str: Formatted prompt for the LLM
        """
        template = prompt_template if prompt_template else self._default_analysis_template
        
        # Convert clusters to string representation
        if isinstance(clusters, dict):
            clusters_str = json.dumps(clusters, indent=2)
        else:
            clusters_str = str(clusters)
            
        # Format the prompt
        return template.format(clusters=clusters_str)
    
    def analyze_clusters(self, clusters, prompt_template=None, **kwargs):
        """
        Analyze clusters and provide critique.
        
        Args:
            clusters (dict): Cluster data to analyze
            prompt_template (str, optional): Custom prompt template
            **kwargs: Additional parameters for analysis
            
        Returns:
            dict: Analysis results
        """
        # Generate the prompt for the LLM
        prompt = self.generate_analysis_prompt(clusters, prompt_template)
        
        # Call the LLM API to get the analysis
        if kwargs.get("use_llm", False):
            # Use the actual LLM for analysis when specifically requested
            return self.llm_caller.call_json_llm(prompt, **kwargs)
        
        # For testing, return a placeholder result
        num_clusters = len(clusters.get("clusters", []))
        
        analysis = {
            "meta": {
                "num_clusters": num_clusters,
                "analysis_method": "Placeholder analysis (no LLM call)"
            },
            "critiques": []
        }
        
        for cluster in clusters.get("clusters", []):
            cluster_id = cluster.get("id", 0)
            cluster_name = cluster.get("name", f"Cluster {cluster_id}")
            cluster_description = cluster.get("description", "No description provided")
            member_count = len(cluster.get("members", []))
            
            analysis["critiques"].append({
                "cluster_id": cluster_id,
                "cluster_name": cluster_name,
                "description": cluster_description,
                "member_count": member_count,
                "coherence": 0.7,  # Placeholder score
                "distinctiveness": 0.6,  # Placeholder score
                "coverage": len(cluster.get("members", [])) / 10.0,  # Placeholder coverage
                "strengths": [
                    "Placeholder strength 1",
                    "Placeholder strength 2"
                ],
                "weaknesses": [
                    "Placeholder weakness"
                ],
                "suggestions": [
                    "Placeholder suggestion for improvement"
                ]
            })
        
        return analysis
    
    def save_analysis(self, analysis, filepath):
        """
        Save analysis to a JSON file.
        
        Args:
            analysis (dict): Analysis data
            filepath (str): Path to save the JSON file
        """
        with open(filepath, "w") as f:
            json.dump(analysis, f, indent=2)
    
    def load_analysis(self, filepath):
        """
        Load analysis from a JSON file.
        
        Args:
            filepath (str): Path to the JSON file
            
        Returns:
            dict: Loaded analysis data
        """
        with open(filepath, "r") as f:
            return json.load(f)