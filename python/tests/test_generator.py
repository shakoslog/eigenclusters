"""
Tests for the ClusterGenerator class.
"""

import json
import os
import tempfile
import unittest

from eigencluster import ClusterGenerator


class TestClusterGenerator(unittest.TestCase):
    """Test cases for ClusterGenerator."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.generator = ClusterGenerator()
        self.test_data = {
            "items": [
                {"id": 1, "text": "Item 1"},
                {"id": 2, "text": "Item 2"},
                {"id": 3, "text": "Item 3"},
            ]
        }
        self.cluster_specs = {
            "clusters": [
                {
                    "id": 0,
                    "name": "Cluster 0",
                    "description": "Description for cluster 0"
                },
                {
                    "id": 1,
                    "name": "Cluster 1",
                    "description": "Description for cluster 1"
                }
            ]
        }
    
    def test_generate_cluster_specs(self):
        """Test cluster specs generation."""
        specs = self.generator.generate_cluster_specs(self.test_data, num_clusters=2)
        
        # Basic validation
        self.assertIsInstance(specs, dict)
        self.assertIn("clusters", specs)
        self.assertEqual(len(specs["clusters"]), 2)
        
        # Check structure
        for cluster in specs["clusters"]:
            self.assertIn("id", cluster)
            self.assertIn("name", cluster)
            self.assertIn("description", cluster)
    
    def test_populate_clusters(self):
        """Test cluster population."""
        populated = self.generator.populate_clusters(self.test_data, self.cluster_specs)
        
        # Basic validation
        self.assertIsInstance(populated, dict)
        self.assertIn("clusters", populated)
        self.assertEqual(len(populated["clusters"]), 2)
        
        # Check structure
        for cluster in populated["clusters"]:
            self.assertIn("id", cluster)
            self.assertIn("name", cluster)
            self.assertIn("description", cluster)
            self.assertIn("members", cluster)
            self.assertIsInstance(cluster["members"], list)
    
    def test_generate_clusters(self):
        """Test end-to-end cluster generation."""
        # Test with num_clusters
        clusters1 = self.generator.generate_clusters(self.test_data, num_clusters=2)
        self.assertIsInstance(clusters1, dict)
        self.assertIn("clusters", clusters1)
        self.assertEqual(len(clusters1["clusters"]), 2)
        
        # Test with existing specs
        clusters2 = self.generator.generate_clusters(self.test_data, cluster_specs=self.cluster_specs)
        self.assertIsInstance(clusters2, dict)
        self.assertIn("clusters", clusters2)
        self.assertEqual(len(clusters2["clusters"]), 2)
        
        # Test specs-only mode
        specs_only = self.generator.generate_clusters(self.test_data, num_clusters=2, populate=False)
        self.assertIsInstance(specs_only, dict)
        self.assertIn("clusters", specs_only)
        self.assertEqual(len(specs_only["clusters"]), 2)
        for cluster in specs_only["clusters"]:
            self.assertNotIn("members", cluster)
    
    def test_save_load_prompt(self):
        """Test saving and loading prompts."""
        prompt = "Test prompt with {num_clusters} clusters for {data}"
        
        # Create a temporary file
        fd, temp_path = tempfile.mkstemp(suffix='.txt')
        os.close(fd)
        
        try:
            # Save prompt
            self.generator.save_prompt(prompt, temp_path)
            
            # Load prompt
            loaded_prompt = self.generator.load_prompt(temp_path)
            
            # Verify loaded prompt matches original
            self.assertEqual(prompt, loaded_prompt)
        finally:
            # Clean up
            os.unlink(temp_path)
    
    def test_save_load_clusters(self):
        """Test saving and loading clusters."""
        clusters = self.generator.generate_clusters(self.test_data, num_clusters=2)
        
        # Create a temporary file
        fd, temp_path = tempfile.mkstemp(suffix='.json')
        os.close(fd)
        
        try:
            # Save clusters
            self.generator.save_clusters(clusters, temp_path)
            
            # Load clusters
            loaded_clusters = self.generator.load_clusters(temp_path)
            
            # Verify loaded clusters match original
            self.assertEqual(clusters, loaded_clusters)
        finally:
            # Clean up
            os.unlink(temp_path)


if __name__ == "__main__":
    unittest.main()