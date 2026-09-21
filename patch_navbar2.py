import re

with open('C:/Users/Duong/Documents/GitHub/NotionNext/themes/claude/components/NavBar.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '''                  <span ref={terminalCommandRef}>
                    <SmartLink href='/' className='claude-terminal-command'>
                      {siteConfig('CLAUDE_BLOG_NAME', 'Blog', NOTION_CONFIG)}
                    </SmartLink>
                  </span>''',
    '''                  <span ref={terminalCommandRef}>
                    <SmartLink href='/' className='claude-terminal-command'>
                      {siteConfig('CLAUDE_BLOG_NAME', 'Blog', NOTION_CONFIG) === '活字印刷' ? siteConfig('TITLE') : siteConfig('CLAUDE_BLOG_NAME', siteConfig('TITLE'), NOTION_CONFIG)}
                    </SmartLink>
                  </span>'''
)

with open('C:/Users/Duong/Documents/GitHub/NotionNext/themes/claude/components/NavBar.js', 'w', encoding='utf-8') as f:
    f.write(content)
