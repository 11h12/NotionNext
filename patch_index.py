import re

with open('C:/Users/Duong/Documents/GitHub/NotionNext/themes/gitbook/index.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the redirect logic so that if the page doesn't exist, it falls back gracefully
new_content = content.replace(
'''        // 重定向到指定文章
        await router.push(index)''',
'''        // Check if the target exists in allNavPages
        const targetUrl = index.startsWith('/') ? index : '/' + index;
        const exists = props.allNavPages && props.allNavPages.some(p => p.slug === index || p.href === targetUrl || p.id === index);
        
        if (exists || index === 'about') {
            await router.push(targetUrl)
        } else if (props.allNavPages && props.allNavPages.length > 0) {
            // Fallback to the first available page if the configured index doesn't exist
            await router.push(props.allNavPages[0].href)
        } else {
            // Nothing to show
        }'''
)

with open('C:/Users/Duong/Documents/GitHub/NotionNext/themes/gitbook/index.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
