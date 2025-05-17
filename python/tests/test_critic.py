"""
Tests for the ClusterCritic class.
"""

import json
import os
import tempfile
import unittest

from eigencluster import ClusterCritic


class TestClusterCritic(unittest.TestCase):
    """Test cases for ClusterCritic."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.critic = ClusterCritic()
        self.test_clusters = {
            "clusters": [
                {
                    "id": 0,
                    "name": "Cluster 0",
                    "description": "Description for cluster 0",
                    "members": [1]
                },
                {
                    "id": 1,
                    "name": "Cluster 1",
                    "description": "Description for cluster 1",
                    "members": [2, 3]
                }
            ]
        }
    
    def test_generate_analysis_prompt(self):
        """Test analysis prompt generation."""
        prompt = self.critic.generate_analysis_prompt(self.test_clusters)
        
        # Basic validation
        self.assertIsInstance(prompt, str)
        self.assertIn("Analyze the following clusters", prompt)
        self.assertIn('"Cluster 0"', prompt)
        self.assertIn('"Cluster 1"', prompt)
    
    def test_analyze_clusters(self):
        """Test cluster analysis."""
        analysis = self.critic.analyze_clusters(self.test_clusters)
        
        # Basic validation
        self.assertIsInstance(analysis, dict)
        self.assertIn("meta", analysis)
        self.assertIn("critiques", analysis)
        self.assertEqual(len(analysis["critiques"]), 2)
        
        # Check structure
        for critique in analysis["critiques"]:
            self.assertIn("cluster_id", critique)
            self.assertIn("cluster_name", critique)
            self.assertIn("description", critique)
            self.assertIn("coherence", critique)
            self.assertIn("strengths", critique)
            self.assertIn("weaknesses", critique)
            self.assertIn("suggestions", critique)
    
    def test_save_load_analysis(self):
        """Test saving and loading analysis."""
        analysis = self.critic.analyze_clusters(self.test_clusters)
        
        # Create a temporary file
        fd, temp_path = tempfile.mkstemp(suffix='.json')
        os.close(fd)
        
        try:
            # Save analysis
            self.critic.save_analysis(analysis, temp_path)
            
            # Load analysis
            loaded_analysis = self.critic.load_analysis(temp_path)
            
            # Verify loaded data matches original
            self.assertEqual(analysis, loaded_analysis)
        finally:
            # Clean up
            os.unlink(temp_path)


if __name__ == "__main__":
    unittest.main()