"""
EigenCluster Models Module

This module provides built-in LLM calling functionality.
"""

import json
import os
import anthropic


class LLMCaller:
    """Base class for LLM API calls."""
    
    def __init__(self, model_name="claude-3-opus-20240229", api_key=None):
        """
        Initialize the LLMCaller.
        
        Args:
            model_name (str): Name of the model to use.
            api_key (str, optional): API key for Anthropic. If not provided, 
                                    will look for ANTHROPIC_API_KEY in environment.
        """
        self.model_name = model_name
        self.api_key = api_key or os.environ.get("ANTHROPIC_API_KEY")
        
        # Initialize the Anthropic client if API key is available
        self.client = None
        if self.api_key:
            self.client = anthropic.Anthropic(api_key=self.api_key)
    
    def call_llm(self, prompt, **kwargs):
        """
        Call an LLM API with the given prompt.
        
        Args:
            prompt (str): The prompt to send to the LLM
            **kwargs: Additional parameters to pass to the LLM API
            
        Returns:
            str: The LLM's response
        """
        # Check if we have a client
        if not self.client:
            return f"Error: No API key provided. Please set api_key parameter or ANTHROPIC_API_KEY environment variable."
        
        # Remove any parameters that aren't meant for the Anthropic API
        api_kwargs = kwargs.copy()
        if "use_llm" in api_kwargs:
            del api_kwargs["use_llm"]
        
        try:
            # For Claude models, use the messages API
            response = self.client.messages.create(
                model=self.model_name,
                max_tokens=4096,
                messages=[
                    {"role": "user", "content": prompt}
                ],
                **api_kwargs
            )
            return response.content[0].text
        except Exception as e:
            return f"Error calling LLM API: {str(e)}"
    
    def call_json_llm(self, prompt, **kwargs):
        """
        Call an LLM API with the given prompt and expect a JSON response.

        Args:
            prompt (str): The prompt to send to the LLM
            **kwargs: Additional parameters to pass to the LLM API

        Returns:
            dict: The parsed JSON response
        """
        # Get the response from the LLM
        response_text = self.call_llm(prompt, **kwargs)

        # Check for error message
        if response_text.startswith("Error:"):
            print(response_text)
            return self._get_fallback_json(prompt)

        # Try to parse the response as JSON
        try:
            return json.loads(response_text)
        except json.JSONDecodeError:
            # Try to extract JSON from the response if it contains other text
            import re

            # First try to find JSON in code blocks
            json_match = re.search(r'```(?:json)?\s*(.*?)\s*```', response_text, re.DOTALL)
            if json_match:
                try:
                    return json.loads(json_match.group(1))
                except json.JSONDecodeError:
                    pass

            # Next, try to find JSON with opening and closing braces
            json_match = re.search(r'(\{.*\})', response_text, re.DOTALL)
            if json_match:
                try:
                    return json.loads(json_match.group(1))
                except json.JSONDecodeError:
                    # Try one more approach - find the largest JSON-like block
                    try:
                        # Find start of JSON (first opening brace)
                        start_idx = response_text.find('{')
                        if start_idx != -1:
                            # Find the last closing brace
                            end_idx = response_text.rfind('}', start_idx)
                            if end_idx != -1:
                                json_str = response_text[start_idx:end_idx+1]
                                return json.loads(json_str)
                    except json.JSONDecodeError:
                        pass

            # If we couldn't parse JSON, print the response and return fallback
            print(f"Could not parse JSON from response: {response_text[:200]}...")
            return self._get_fallback_json(prompt)
    
    def _get_fallback_json(self, prompt):
        """
        Generate fallback JSON based on the prompt.
        
        Args:
            prompt (str): The prompt that was sent to the LLM
            
        Returns:
            dict: A fallback JSON response
        """
        # For cluster specs
        if "cluster specifications" in prompt.lower():
            return {
                "clusters": [
                    {
                        "id": 0,
                        "name": "Fallback Cluster 1",
                        "description": "This is a fallback cluster due to JSON parsing error"
                    },
                    {
                        "id": 1,
                        "name": "Fallback Cluster 2",
                        "description": "This is a fallback cluster due to JSON parsing error"
                    }
                ]
            }
        # For populated clusters
        elif "populate" in prompt.lower() or "members" in prompt.lower():
            return {
                "clusters": [
                    {
                        "id": 0,
                        "name": "Fallback Cluster 1",
                        "description": "This is a fallback cluster due to JSON parsing error",
                        "members": [1, 2, 3]
                    },
                    {
                        "id": 1,
                        "name": "Fallback Cluster 2",
                        "description": "This is a fallback cluster due to JSON parsing error",
                        "members": [4, 5, 6]
                    }
                ]
            }
        # For eigenclusters
        elif "period" in prompt.lower() and "periodicity" in prompt.lower():
            return {
                "metadata": {
                    "period": "2000-2020",
                    "interval": "5 years",
                    "cluster_range": "1-3",
                    "measurement": "relative cultural variance explained (0-100)",
                    "top_20_clusters": [
                        f"{i}_fallback_cluster [{'↗' if i % 3 == 0 else '↘' if i % 3 == 1 else '→'}] ({(20-i+1):0.1f}%)" 
                        for i in range(1, 21)
                    ]
                },
                "clusters": {
                    "1_fallback_cluster": {
                        "name": "Fallback Cluster 1",
                        "description": "This is a fallback cluster due to JSON parsing error",
                        "trajectory": {
                            "2000": {
                                "variance_explained": 20.0,
                                "description": "Fallback description due to JSON parsing error",
                                "key_manifestations": [
                                    "Fallback manifestation 1",
                                    "Fallback manifestation 2",
                                    "Fallback manifestation 3",
                                    "Fallback manifestation 4"
                                ]
                            },
                            "2020": {
                                "variance_explained": 20.0,
                                "description": "Fallback description due to JSON parsing error",
                                "key_manifestations": [
                                    "Fallback manifestation 1",
                                    "Fallback manifestation 2",
                                    "Fallback manifestation 3",
                                    "Fallback manifestation 4"
                                ]
                            }
                        }
                    }
                }
            }
        # For analysis
        elif "analysis" in prompt.lower() or "critique" in prompt.lower():
            return {
                "meta": {
                    "num_clusters": 2,
                    "analysis_method": "Fallback analysis due to JSON parsing error"
                },
                "critiques": [
                    {
                        "cluster_id": 0,
                        "cluster_name": "Fallback Cluster 1",
                        "coherence": 0.5,
                        "distinctiveness": 0.5,
                        "strengths": ["Fallback strength"],
                        "weaknesses": ["Fallback weakness"],
                        "suggestions": ["Fallback suggestion"]
                    },
                    {
                        "cluster_id": 1,
                        "cluster_name": "Fallback Cluster 2",
                        "coherence": 0.5,
                        "distinctiveness": 0.5,
                        "strengths": ["Fallback strength"],
                        "weaknesses": ["Fallback weakness"],
                        "suggestions": ["Fallback suggestion"]
                    }
                ]
            }
        # Generic fallback
        else:
            return {"error": "Could not parse JSON from LLM response"}