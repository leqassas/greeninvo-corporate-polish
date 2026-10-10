import os
import re

DIR = r"c:\Users\MJQ\Downloads\greeninvo-site-main\greeninvo-site-main\src"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original_content = content

    # 1. Standardize padding: px={["1.2rem", "5rem", "10rem"]} etc -> px={["1.5rem", "3rem", "6rem"]}
    content = re.sub(r'px=\{\[.*?\]\}', 'px={["1.5rem", "3rem", "6rem"]}', content)
    
    # 2. Remove muddy shadows and update button hovers
    content = re.sub(r'boxShadow=[\'"]0px -200px 100px -50px rgba\(0, 0, 0, 0\.50\) inset[\'"]', 'boxShadow="none"', content)
    content = re.sub(r'boxShadow:\s*[\'"]0px 0px 80px 15px rgba\(3,153,158,1\)[\'"]', 'boxShadow: "none"', content)
    content = re.sub(r'boxShadow=[\'"]0px 0px 400px 150px rgba\(0, 0, 0, 0\.50\) inset[\'"]', 'boxShadow="none"', content)

    # 3. Refined Hovers
    # Replace the _hover on buttons with: transform: "scale(1.05)", boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
    # We can match `_hover={{ ... }}` blocks, but we need to ensure we're replacing them safely.
    # To safely replace the specific Hero.js button hover:
    hover_pattern = r'_hover=\{\{\s*border:\s*"3px solid #03989e",\s*bg:\s*"whiteAlpha\.200",\s*boxShadow:\s*"0px 0px 80px 15px rgba\(3,153,158,1\)",?\s*\}\}'
    content = re.sub(hover_pattern, '_hover={{ transform: "scale(1.05)", boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}', content)
    
    # For hovers that only have color/background or scale:
    # Actually, we can just replace all `_hover={{ ... }}` that just do color/bg with scale/boxShadow for buttons.
    # To avoid breaking random hovers, let's just inject `transform="scale(1.05)"` and `boxShadow="0px 10px 20px rgba(0,0,0,0.2)"` on <Button> and replace their _hover if they had one.
    
    # 4. Scroll Reveals: 
    # Change initial={{ opacity: 0 }} or initial={{ x: ..., opacity: 0 }} -> initial={{ opacity: 0, y: 30 }}
    # Change whileInView={{ opacity: 1 }} or opacity: 100 or x: 0 -> whileInView={{ opacity: 1, y: 0 }}
    
    # First normalize the opacity to 1 or 100
    content = re.sub(r'initial=\{\{\s*opacity:\s*0\s*\}\}', 'initial={{ opacity: 0, y: 30 }}', content)
    content = re.sub(r'initial=\{\{\s*x:\s*(?:align === "end"\s*\?\s*30\s*:\s*-30|30|-30)\s*,\s*opacity:\s*0\s*\}\}', 'initial={{ opacity: 0, y: 30 }}', content)
    content = re.sub(r'whileInView=\{\{\s*opacity:\s*(?:1|100)\s*\}\}', 'whileInView={{ opacity: 1, y: 0 }}', content)
    content = re.sub(r'whileInView=\{\{\s*x:\s*0\s*,\s*opacity:\s*(?:1|100)\s*\}\}', 'whileInView={{ opacity: 1, y: 0 }}', content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

for root, dirs, files in os.walk(DIR):
    for file in files:
        if file.endswith('.js'):
            process_file(os.path.join(root, file))

print("Processing complete.")
