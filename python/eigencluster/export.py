"""
Export functions for TypeScript integration.
"""

import os
import json
import shutil
from typing import Dict, Any, Optional


def format_for_typescript(clusters_data: Dict[str, Any], preset_config: Dict[str, Any], legacy_format: bool = False) -> Dict[str, Any]:
    """
    Format cluster data to match the TypeScript PresetConfig structure.

    Args:
        clusters_data: The raw clusters data from the generator
        preset_config: Configuration for the preset
        legacy_format: If True, use the legacy format with parameters nested object

    Returns:
        Dict formatted for TypeScript consumption
    """
    # Ensure the data structure matches what TypeScript expects
    if "metadata" not in clusters_data or "clusters" not in clusters_data:
        raise ValueError("Clusters data missing required fields (metadata, clusters)")

    # Extract values with defaults
    start_year = str(preset_config.get("start_year", clusters_data["metadata"].get("period", "").split("-")[0]))
    end_year = str(preset_config.get("end_year", clusters_data["metadata"].get("period", "").split("-")[1]))
    cluster_start = preset_config.get("cluster_start", 1)
    cluster_end = preset_config.get("cluster_end", 5)
    periodicity = preset_config.get("periodicity", 10)
    context = preset_config.get("context", "")
    model = preset_config.get("model", "claude-3-opus-20240229")

    if legacy_format:
        # Legacy format - for backward compatibility
        return {
            "id": preset_config["id"],
            "name": preset_config["name"],
            "description": preset_config["description"],
            "parameters": {
                "startYear": start_year,
                "endYear": end_year,
                "clusterStart": cluster_start,
                "clusterEnd": cluster_end,
                "periodicity": periodicity,
                "context": context,
                "model": model
            },
            "cachedResult": clusters_data
        }
    else:
        # New format - direct properties
        return {
            "id": preset_config["id"],
            "name": preset_config["name"],
            "description": preset_config["description"],
            "startYear": start_year,
            "endYear": end_year,
            "clusterStart": cluster_start,
            "clusterEnd": cluster_end,
            "periodicity": periodicity,
            "context": context,
            "model": model,
            "cachedResult": clusters_data
        }


def export_to_typescript(
    clusters_data: Dict[str, Any],
    preset_config: Dict[str, Any],
    output_dir: str,
    create_ts_file: bool = True,
    legacy_format: bool = False
) -> str:
    """
    Export cluster data to TypeScript-compatible format.
    
    Args:
        clusters_data: The raw clusters data
        preset_config: Configuration for the preset
        output_dir: Directory where files should be saved
        create_ts_file: Whether to create a TypeScript file in addition to JSON
        
    Returns:
        Path to the created JSON file
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Just use the raw clusters data to avoid processing issues
    formatted_data = clusters_data
    
    # Determine filenames
    preset_id = preset_config["id"]
    json_filename = f"{preset_id}.json"
    ts_filename = f"{preset_id}.ts"
    
    json_path = os.path.join(output_dir, json_filename)
    ts_path = os.path.join(output_dir, ts_filename)
    
    # Write JSON file
    with open(json_path, "w") as f:
        json.dump(formatted_data, f, indent=2)
    
    # Optionally create TypeScript file
    if create_ts_file:
        # Convert kebab-case to camelCase for variable name
        variable_name = ''.join(word.capitalize() if i > 0 else word for i, word in enumerate(preset_id.split('-')))

        ts_content = f"""import {{ PresetConfig }} from './types';
import rawData from './{json_filename}';

const {variable_name}Preset: PresetConfig = {{
  id: "{preset_id}",
  name: "{preset_config["name"]}",
  description: "{preset_config["description"]}",
  startYear: "{preset_config.get("start_year", formatted_data["metadata"].get("period", "").split("-")[0])}",
  endYear: "{preset_config.get("end_year", formatted_data["metadata"].get("period", "").split("-")[1])}",
  clusterStart: {preset_config.get("cluster_start", 1)},
  clusterEnd: {preset_config.get("cluster_end", 5)},
  periodicity: {preset_config.get("periodicity", 10)},
  context: "{preset_config.get("context", "")}",
  model: "{preset_config.get("model", "claude-3-opus-20240229")}",
  cachedResult: rawData
}};

export default {variable_name}Preset;
"""
        with open(ts_path, "w") as f:
            f.write(ts_content)
    
    return json_path


def update_typescript_index(
    preset_id: str,
    ts_dir: str,
    index_file: str = "index.ts"
) -> bool:
    """
    Update the TypeScript index.ts file to include the new preset.

    Args:
        preset_id: ID of the preset to add
        ts_dir: Directory containing the TypeScript files
        index_file: Name of the index file

    Returns:
        True if successful, False otherwise
    """
    index_path = os.path.join(ts_dir, index_file)

    try:
        # Read current index file
        with open(index_path, "r") as f:
            index_content = f.read()

        # Check if preset already exists
        if f"'{preset_id}'" in index_content or f'"{preset_id}"' in index_content:
            print(f"Preset '{preset_id}' already exists in index.ts")
            return True

        # Find the preset modules object
        import_line = f"    '{preset_id}': () => import('./{preset_id}').then(module => module.default),"

        # Find where to insert the new line - look for the comment marker or the last import
        if "// When you add a new preset file, add a new line here:" in index_content:
            # Find the comment marker
            comment_marker = "// When you add a new preset file, add a new line here:"
            parts = index_content.split(comment_marker)

            # Find the line after the comment that has the next real entry or closing brace
            lines_after_comment = parts[1].split("\n")

            # Find the first non-comment, non-empty line
            insert_index = 0
            for i, line in enumerate(lines_after_comment):
                if line.strip() and not line.strip().startswith("//"):
                    insert_index = i
                    break

            # Insert our new line before this line
            lines_after_comment.insert(insert_index, import_line)

            # Reconstruct the file
            new_content = parts[0] + comment_marker + "\n".join(lines_after_comment)

            # Write updated content
            with open(index_path, "w") as f:
                f.write(new_content)

            return True

        # Alternative approach - find the last import line
        elif "import('./" in index_content:
            # Find all lines with imports
            lines = index_content.split("\n")
            last_import_idx = -1

            for i, line in enumerate(lines):
                if "import('./" in line:
                    last_import_idx = i

            if last_import_idx >= 0:
                # Insert after the last import line
                lines.insert(last_import_idx + 1, import_line)

                # Reconstruct the file
                new_content = "\n".join(lines)

                # Write updated content
                with open(index_path, "w") as f:
                    f.write(new_content)

                return True

        else:
            print("Could not find a suitable insertion point in index.ts")
            return False

    except Exception as e:
        print(f"Error updating index.ts: {e}")
        return False


def copy_to_typescript_dir(
    json_path: str,
    ts_path: Optional[str],
    ts_dir: str
) -> bool:
    """
    Copy generated files to the TypeScript presets directory.
    
    Args:
        json_path: Path to the JSON file
        ts_path: Path to the TypeScript file (if created)
        ts_dir: Directory containing TypeScript presets
        
    Returns:
        True if successful, False otherwise
    """
    try:
        # Copy JSON file
        json_dest = os.path.join(ts_dir, os.path.basename(json_path))
        shutil.copy2(json_path, json_dest)
        
        # Copy TypeScript file if it exists
        if ts_path and os.path.exists(ts_path):
            ts_dest = os.path.join(ts_dir, os.path.basename(ts_path))
            shutil.copy2(ts_path, ts_dest)
            
        return True
    
    except Exception as e:
        print(f"Error copying files to TypeScript directory: {e}")
        return False