import re

def translate_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for en, id_ in replacements.items():
        if isinstance(id_, str):
            # Replace string values with { en: "...", id: "..." }
            content = content.replace(f'"{en}"', f'{{ en: "{en}", id: "{id_}" }}')
        elif isinstance(id_, list):
            # Replace array of strings
            en_array = "[\n      " + ",\n      ".join(f'"{item}"' for item in en) + ",\n    ]"
            id_array = "[\n      " + ",\n      ".join(f'"{item}"' for item in id_) + ",\n    ]"
            content = content.replace(en_array, f'{{ en: {en_array}, id: {id_array} }}')
            
    # Write back
    with open(filepath, 'w') as f:
        f.write(content)

# We will just write the new file content directly to avoid regex complexity
