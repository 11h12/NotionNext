import re

with open('C:/Users/Duong/Documents/GitHub/NotionNext/components/ThemeSwitch.js', 'r', encoding='utf-8') as f:
    content = f.read()

translations = {
    '全部Đã sao chép cấu hình': 'Đã sao chép toàn bộ cấu hình',
    '恢复默认Cấu hình chung': 'Khôi phục cấu hình chung',
    '当前主题暂未声明可在线调整的Cấu hình chung。': 'Giao diện này chưa hỗ trợ cấu hình trực tiếp.',
    '恢复默认Bảng màu': 'Khôi phục bảng màu',
    '当前主题暂未声明Chế độ tối色号。': 'Giao diện này chưa hỗ trợ mã màu cho Chế độ tối.',
    'Đổi giao diện，当前为': 'Đổi giao diện, hiện tại là',
    '切换Chế độ sáng': 'Chuyển sang chế độ sáng',
    '切换Chế độ tối': 'Chuyển sang chế độ tối'
}

for zh, vi in translations.items():
    content = content.replace(zh, vi)
    
with open('C:/Users/Duong/Documents/GitHub/NotionNext/components/ThemeSwitch.js', 'w', encoding='utf-8') as f:
    f.write(content)
