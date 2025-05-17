"""
EigenCluster Generation Module

This module provides functionality for generating clusters.
"""

import json
import os
from eigencluster.models import LLMCaller
from eigencluster.prompt import rprompt


class ClusterGenerator:
    """Generate clusters based on provided data."""
    
    def __init__(self, model_name="claude-3-opus-20240229", api_key=None):
        """
        Initialize the ClusterGenerator.
        
        Args:
            model_name (str): Name of the model to use for generation.
            api_key (str, optional): API key for the LLM. If not provided,
                                     will look for ANTHROPIC_API_KEY in environment.
        """
        self.model_name = model_name
        self.llm_caller = LLMCaller(model_name=model_name, api_key=api_key)
        
        # Default prompt template for cluster spec generation
        self._default_spec_template = """
        Given the following data, identify {num_clusters} distinct clusters that would best categorize this data.
        For each cluster, provide a unique ID, a descriptive name, and a brief description of what unifies this cluster.
        
        Data: {data}
        
        Format your response as a JSON object with this structure:
        {{
            "clusters": [
                {{
                    "id": 0,
                    "name": "Descriptive Cluster Name",
                    "description": "Brief description of what unifies this cluster"
                }},
                ...more clusters...
            ]
        }}
        
        Only return the JSON object, with no additional text before or after.
        """
        
        # Default prompt template for cluster population
        self._default_population_template = """
        Given the following data and cluster specifications, assign each item to the most appropriate cluster.
        
        Data: {data}
        
        Cluster Specifications:
        {cluster_specs}
        
        Format your response as a JSON object with this structure:
        {{
            "clusters": [
                {{
                    "id": 0,
                    "name": "Descriptive Cluster Name",
                    "description": "Brief description of what unifies this cluster",
                    "members": [list of member IDs from the input data]
                }},
                ...more clusters...
            ]
        }}
        
        Only return the JSON object, with no additional text before or after.
        """
        
        # Store the eigenculster prompt
        self.rprompt = rprompt
    
    def generate_cluster_specs_prompt(self, data, num_clusters, prompt_template=None):
        """
        Generate a prompt for the LLM to create cluster specifications.
        
        Args:
            data: Input data for clustering
            num_clusters (int): Number of clusters to generate
            prompt_template (str, optional): Custom prompt template
            
        Returns:
            str: Formatted prompt for the LLM
        """
        template = prompt_template if prompt_template else self._default_spec_template
        
        # Convert data to string representation
        if isinstance(data, dict):
            data_str = json.dumps(data, indent=2)
        else:
            data_str = str(data)
            
        # Format the prompt
        return template.format(num_clusters=num_clusters, data=data_str)
    
    def generate_population_prompt(self, data, cluster_specs, prompt_template=None):
        """
        Generate a prompt for the LLM to populate clusters with members.
        
        Args:
            data: Input data for clustering
            cluster_specs (dict): Cluster specifications
            prompt_template (str, optional): Custom prompt template
            
        Returns:
            str: Formatted prompt for the LLM
        """
        template = prompt_template if prompt_template else self._default_population_template
        
        # Convert data to string representation
        if isinstance(data, dict):
            data_str = json.dumps(data, indent=2)
        else:
            data_str = str(data)
            
        # Convert cluster specs to string representation
        if isinstance(cluster_specs, dict):
            specs_str = json.dumps(cluster_specs, indent=2)
        else:
            specs_str = str(cluster_specs)
            
        # Format the prompt
        return template.format(data=data_str, cluster_specs=specs_str)
    
    def generate_eigenclusters_prompt(self, data, start_year, end_year, periodicity=10, cluster_range="1-5", additional_context=""):
        """
        Generate a prompt for the LLM to create eigenclusters using the specialized prompt.
        
        Args:
            data: Input data (optional)
            start_year (int): Start year for the analysis
            end_year (int): End year for the analysis
            periodicity (int): Year interval for analysis points
            cluster_range (str): Range of clusters to analyze (e.g., "1-5")
            additional_context (str): Additional context to provide
            
        Returns:
            str: Formatted prompt for the LLM
        """
        # Extract cluster start and end
        try:
            cluster_parts = cluster_range.split("-")
            cluster_start = int(cluster_parts[0])
            cluster_end = int(cluster_parts[1]) if len(cluster_parts) > 1 else cluster_start
        except (ValueError, IndexError):
            cluster_start = 1
            cluster_end = 5
            cluster_range = "1-5"
        
        # Build the eigencluster prompt
        # The core prompt already exists in self.rprompt
        
        # Create the specific request for the given parameters
        request = f"""
        I need an analysis of cultural eigenclusters from {start_year} to {end_year}, using a periodicity of {periodicity} years, focusing on clusters {cluster_range}.
        
        {additional_context}
        """
        
        # Combine with the core prompt
        return f"{self.rprompt}\n\n{request}"
    
    def generate_cluster_specs(self, data, num_clusters=5, prompt_template=None, **kwargs):
        """
        Generate cluster specifications (without populating members).
        
        Args:
            data (list or dict): Input data to cluster
            num_clusters (int): Number of clusters to generate
            prompt_template (str, optional): Custom prompt template
            **kwargs: Additional parameters
            
        Returns:
            dict: Generated cluster specifications
        """
        # Generate the prompt for the LLM
        prompt = self.generate_cluster_specs_prompt(data, num_clusters, prompt_template)
        
        # Call the LLM API to get the specifications
        if kwargs.get("use_llm", False):
            # Use the actual LLM for generation when specifically requested
            return self.llm_caller.call_json_llm(prompt, **kwargs)
        
        # For testing, return a placeholder result
        cluster_specs = {"clusters": []}
        for i in range(num_clusters):
            cluster_specs["clusters"].append({
                "id": i,
                "name": f"Cluster {i}",
                "description": f"Description for cluster {i}"
            })
        
        return cluster_specs
    
    def populate_clusters(self, data, cluster_specs, prompt_template=None, **kwargs):
        """
        Populate clusters with members based on cluster specifications.
        
        Args:
            data (list or dict): Input data to cluster
            cluster_specs (dict): Cluster specifications
            prompt_template (str, optional): Custom prompt template
            **kwargs: Additional parameters
            
        Returns:
            dict: Populated clusters with members
        """
        # Generate the prompt for the LLM
        prompt = self.generate_population_prompt(data, cluster_specs, prompt_template)
        
        # Call the LLM API to get the populated clusters
        if kwargs.get("use_llm", False):
            # Use the actual LLM for generation when specifically requested
            return self.llm_caller.call_json_llm(prompt, **kwargs)
        
        # For testing, populate the clusters programmatically as a placeholder
        populated_clusters = {"clusters": []}
        
        for cluster in cluster_specs.get("clusters", []):
            cluster_id = cluster.get("id")
            cluster_name = cluster.get("name")
            cluster_description = cluster.get("description")
            
            # Create a cluster with some placeholder members
            members = []
            if isinstance(data, dict) and "items" in data:
                # Calculate a range of items to include based on cluster ID
                items = data["items"]
                num_clusters = len(cluster_specs.get("clusters", []))
                if num_clusters > 0:
                    cluster_size = max(1, len(items) // num_clusters)
                    start_idx = cluster_id * cluster_size
                    end_idx = min(start_idx + cluster_size, len(items))
                    
                    for j in range(start_idx, end_idx):
                        if j < len(items) and "id" in items[j]:
                            members.append(items[j]["id"])
            
            populated_clusters["clusters"].append({
                "id": cluster_id,
                "name": cluster_name,
                "description": cluster_description,
                "members": members
            })
        
        return populated_clusters
    
    def generate_eigenclusters(self, start_year, end_year, periodicity=10, cluster_range="1-5", additional_context="", **kwargs):
        """
        Generate eigenclusters analysis using the specialized prompt.
        
        Args:
            start_year (int): Start year for the analysis
            end_year (int): End year for the analysis
            periodicity (int): Year interval for analysis points
            cluster_range (str): Range of clusters to analyze (e.g., "1-5")
            additional_context (str): Additional context to provide
            **kwargs: Additional parameters
            
        Returns:
            dict: Generated eigenclusters analysis
        """
        # Generate the prompt for the LLM
        prompt = self.generate_eigenclusters_prompt(
            None, start_year, end_year, periodicity, cluster_range, additional_context
        )
        
        # Call the LLM API to get the eigenclusters
        if kwargs.get("use_llm", False):
            # Use the actual LLM for generation
            return self.llm_caller.call_json_llm(prompt, **kwargs)
        
        # For testing, return a placeholder result
        # Extract cluster start and end
        try:
            cluster_parts = cluster_range.split("-")
            cluster_start = int(cluster_parts[0])
            cluster_end = int(cluster_parts[1]) if len(cluster_parts) > 1 else cluster_start
        except (ValueError, IndexError):
            cluster_start = 1
            cluster_end = 5
        
        # Build placeholder eigenclusters analysis
        eigenclusters = {
            "metadata": {
                "period": f"{start_year}-{end_year}",
                "interval": f"{periodicity} years",
                "cluster_range": cluster_range,
                "measurement": "relative cultural variance explained (0-100)",
                "top_20_clusters": [
                    f"{i}_placeholder_cluster [{'↗' if i % 3 == 0 else '↘' if i % 3 == 1 else '→'}] ({(20-i+1):0.1f}%)" 
                    for i in range(1, 21)
                ]
            },
            "clusters": {}
        }
        
        # Add the requested clusters
        for i in range(cluster_start, cluster_end + 1):
            cluster_key = f"{i}_placeholder_cluster_{i}"
            
            # Create trajectory for each year
            trajectory = {}
            total_years = end_year - start_year
            for year in range(start_year, end_year + 1, periodicity):
                progress = (year - start_year) / total_years if total_years > 0 else 0
                variance = max(0, min(100, 20 - (i-1) * 2 + progress * 10 * (i % 3 - 1)))
                
                trajectory[str(year)] = {
                    "variance_explained": variance,
                    "description": f"Placeholder description for cluster {i} in the year {year}.",
                    "key_manifestations": [
                        f"Placeholder manifestation 1 for cluster {i} in {year}",
                        f"Placeholder manifestation 2 for cluster {i} in {year}",
                        f"Placeholder manifestation 3 for cluster {i} in {year}",
                        f"Placeholder manifestation 4 for cluster {i} in {year}"
                    ]
                }
            
            eigenclusters["clusters"][cluster_key] = {
                "name": f"Placeholder Cluster {i}",
                "description": f"This is a placeholder description for cluster {i} covering the time period {start_year}-{end_year}.",
                "trajectory": trajectory
            }
        
        return eigenclusters
    
    def generate_clusters(self, data, num_clusters=5, cluster_specs=None, populate=True, **kwargs):
        """
        Generate clusters from the provided data, optionally using existing specs.
        
        Args:
            data (list or dict): Input data to cluster
            num_clusters (int): Number of clusters to generate (used only if cluster_specs is None)
            cluster_specs (dict, optional): Existing cluster specifications
            populate (bool): Whether to populate clusters with members
            **kwargs: Additional parameters
            
        Returns:
            dict: Generated clusters with metadata
        """
        # If no cluster specs provided, generate them
        if cluster_specs is None:
            cluster_specs = self.generate_cluster_specs(data, num_clusters, **kwargs)
            
        # If populate is True, populate clusters with members
        if populate:
            return self.populate_clusters(data, cluster_specs, **kwargs)
        else:
            return cluster_specs
    
    def save_prompt(self, prompt, filepath):
        """
        Save prompt to a text file.
        
        Args:
            prompt (str): The prompt to save
            filepath (str): Path to save the text file
        """
        with open(filepath, "w") as f:
            f.write(prompt)
    
    def load_prompt(self, filepath):
        """
        Load prompt from a text file.
        
        Args:
            filepath (str): Path to the text file
            
        Returns:
            str: The loaded prompt
        """
        with open(filepath, "r") as f:
            return f.read()
            
    def save_clusters(self, clusters, filepath):
        """
        Save clusters to a JSON file.
        
        Args:
            clusters (dict): Cluster data
            filepath (str): Path to save the JSON file
        """
        with open(filepath, "w") as f:
            json.dump(clusters, f, indent=2)
    
    def load_clusters(self, filepath):
        """
        Load clusters from a JSON file.
        
        Args:
            filepath (str): Path to the JSON file
            
        Returns:
            dict: Loaded cluster data
        """
        with open(filepath, "r") as f:
            return json.load(f)