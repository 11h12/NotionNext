import re

with open('C:/Users/Duong/Documents/GitHub/NotionNext/themes/gitbook/index.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content.replace(
'''short_id: item.short_id,''',
'''short_id: item.id ? getShortId(item.id) : '','''
)
new_content = new_content.replace(
'''item.short_id''',
'''(item.id ? getShortId(item.id) : '')'''
)

with open('C:/Users/Duong/Documents/GitHub/NotionNext/themes/gitbook/index.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
