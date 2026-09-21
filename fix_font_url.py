with open('C:/Users/Duong/Documents/GitHub/NotionNext/conf/font.config.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if line.startswith("  FONT_URL: process.env.NEXT_PUBLIC_FONT_URL"):
        new_lines.append("  FONT_URL: process.env.NEXT_PUBLIC_FONT_URL || 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',\n")
    else:
        new_lines.append(line)

with open('C:/Users/Duong/Documents/GitHub/NotionNext/conf/font.config.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
