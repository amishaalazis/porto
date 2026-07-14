import re

with open('components/Projects.tsx', 'r') as f:
    content = f.read()

# Instead of parsing everything, let's just make the changes to ProjectCard in Projects.tsx to support passing sourceCodeText and liveDemoText,
# and we will update the component to just use the data. 
# BUT we need to translate the projectData array!
