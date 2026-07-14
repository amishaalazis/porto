import re

with open('components/Experience.tsx', 'r') as f:
    content = f.read()

# Fix missing brace
content = content.replace("  },\n    title: {", "  },\n  {\n    title: {")

with open('components/Experience.tsx', 'w') as f:
    f.write(content)

