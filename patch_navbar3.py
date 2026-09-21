with open('C:/Users/Duong/Documents/GitHub/NotionNext/themes/claude/components/NavBar.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '''{siteConfig('CLAUDE_BLOG_NAME', '活字印刷', NOTION_CONFIG)}''',
    '''{siteConfig('CLAUDE_BLOG_NAME', siteConfig('TITLE'), NOTION_CONFIG)}'''
)

with open('C:/Users/Duong/Documents/GitHub/NotionNext/themes/claude/components/NavBar.js', 'w', encoding='utf-8') as f:
    f.write(content)
