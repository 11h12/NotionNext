/**
 * 主题切换面板 — 集中配置（与 themes/<id> 目录名对应）
 *
 * 字段说明：
 * - name    展示名称（缺省则自动格式化为目录名的 Title Case）
 * - summary 简短简介，展示在卡片标题下方
 * - cover   预览图 URL（缺省 /images/themes-preview/<id>.png）
 * - coverWebp 可选；缺省 /images/themes-preview/<id>.webp，设为 '' 可跳过 webp 仅用 cover
 * - tier    可选；'free' | 'paid'，缺省为 'free'。面板展示对应标签，为后续付费主题预留。
 */

/** @type {Record<string, { name?: string, summary?: string, cover?: string, coverWebp?: string, rootId?: string, tier?: 'free' | 'paid', settings?: Array<{ key: string, label: string, type: 'boolean' | 'text' | 'number' | 'select', defaultValue: string | number | boolean, options?: Array<{ label: string, value: string | number | boolean }> }>, palette?: Array<{ key: string, cssVar: string, label: string, defaultValue: string }> }>} */
export const THEME_SWITCH_MANIFEST = {
  endspace: {
    name: 'Endspace',
    summary: 'Phong cách công nghiệp, điều hướng bên, công cụ nổi và hiệu ứng tải.',
    settings: [
      { key: 'ENDSPACE_LOADING_COVER', label: 'Hiệu ứng tải', type: 'boolean', defaultValue: true },
      { key: 'ENDSPACE_LOADING_SITE_NAME', label: 'Tên trang lúc tải', type: 'text', defaultValue: 'CLOUD09_SPACE' },
      { key: 'ENDSPACE_BANNER_WATERMARK_TEXT', label: 'Chữ mờ trang chủ', type: 'text', defaultValue: 'CLOUD09_SPACE' },
      { key: 'ENDSPACE_ARTICLE_WATERMARK_TEXT', label: 'Chữ mờ bài viết', type: 'text', defaultValue: 'CLOUD09' },
      { key: 'ENDSPACE_MENU_ARCHIVE', label: 'Menu lưu trữ', type: 'boolean', defaultValue: true }
    ],
    palette: [
      { key: 'ENDSPACE_COLOR_BG_BASE', cssVar: '--endspace-bg-base-light', label: 'Nền trang web', defaultValue: '#fafafa' },
      { key: 'ENDSPACE_COLOR_SURFACE', cssVar: '--endspace-bg-primary-light', label: 'Nền thẻ', defaultValue: '#ffffff' },
      { key: 'ENDSPACE_COLOR_TEXT', cssVar: '--endspace-text-primary-light', label: 'Chữ chính', defaultValue: '#18181b' },
      { key: 'ENDSPACE_COLOR_TEXT_SECONDARY', cssVar: '--endspace-text-secondary-light', label: 'Chữ phụ', defaultValue: '#52525b' },
      { key: 'ENDSPACE_COLOR_ACCENT', cssVar: '--endspace-accent-yellow-light', label: 'Màu nhấn', defaultValue: '#FBFB45' },
      { key: 'ENDSPACE_COLOR_ACCENT_DIM', cssVar: '--endspace-accent-yellow-dim-light', label: 'Màu nhấn nhạt', defaultValue: 'rgba(251, 251, 69, 0.15)' },
      { key: 'ENDSPACE_COLOR_BORDER', cssVar: '--endspace-border-base-light', label: 'Đường viền', defaultValue: '#e4e4e7' },
      { key: 'ENDSPACE_COLOR_BG_BASE_DARK', cssVar: '--endspace-bg-base-dark', label: 'Chế độ tối: Nền trang', defaultValue: '#09090b' },
      { key: 'ENDSPACE_COLOR_SURFACE_DARK', cssVar: '--endspace-bg-primary-dark', label: 'Chế độ tối: Nền thẻ', defaultValue: '#18181b' },
      { key: 'ENDSPACE_COLOR_TEXT_DARK', cssVar: '--endspace-text-primary-dark', label: 'Chế độ tối: Chữ chính', defaultValue: '#f4f4f5' },
      { key: 'ENDSPACE_COLOR_TEXT_SECONDARY_DARK', cssVar: '--endspace-text-secondary-dark', label: 'Chế độ tối: Chữ phụ', defaultValue: '#d4d4d8' },
      { key: 'ENDSPACE_COLOR_BORDER_DARK', cssVar: '--endspace-border-base-dark', label: 'Chế độ tối: Đường viền', defaultValue: '#3f3f46' },
      { key: 'ENDSPACE_COLOR_ACCENT_DARK', cssVar: '--endspace-accent-yellow-dark', label: 'Chế độ tối: Màu nhấn', defaultValue: '#fef08a' }
    ]
  },
  next: {
    name: 'Next',
    summary: 'Bố cục hai cột cổ điển, cột phải và menu nổi trên điện thoại.',
    palette: [
      { key: 'NEXT_COLOR_PRIMARY', cssVar: '--next-color-primary', label: 'Màu chính', defaultValue: '#4e80ee' },
      { key: 'NEXT_COLOR_BG', cssVar: '--next-color-bg', label: 'Nền trang web', defaultValue: '#eeedee' }
    ]
  },
  simple: {
    name: 'Simple',
    summary: 'Tối giản, tươi mới, phù hợp cho blog nhiều chữ.',
    palette: [
      { key: 'SIMPLE_COLOR_PRIMARY', cssVar: '--simple-color-primary', label: 'Màu chính', defaultValue: '#dd3333' },
      { key: 'SIMPLE_COLOR_TITLE', cssVar: '--simple-color-title', label: 'Màu tiêu đề', defaultValue: '#276077' }
    ]
  },
  medium: {
    name: 'Medium',
    summary: 'Phong cách đọc và bố cục giống Medium.',
    palette: [
      { key: 'MEDIUM_COLOR_PRIMARY', cssVar: '--medium-color-primary', label: 'Màu chính', defaultValue: '#4f46e5' }
    ]
  },
  matery: {
    name: 'Matery',
    summary: 'Danh sách dạng thẻ và giao diện Material.',
    palette: [
      { key: 'MATERY_COLOR_PRIMARY', cssVar: '--matery-color-primary', label: 'Màu chính', defaultValue: '#4338ca' },
      { key: 'MATERY_COLOR_PRIMARY_LIGHT', cssVar: '--matery-color-primary-light', label: 'Màu chính nhạt', defaultValue: '#818cf8' },
      { key: 'MATERY_COLOR_BG', cssVar: '--matery-color-bg', label: 'Nền trang web', defaultValue: '#f5f5f5' }
    ]
  },
  heo: {
    name: 'Heo',
    summary: 'Phong cách ZhangHongHeo, nhiều thành phần module.',
    palette: [
      { key: 'HEO_COLOR_PRIMARY', cssVar: '--heo-color-primary', label: 'Màu chính', defaultValue: '#4f65f0' },
      { key: 'HEO_COLOR_PRIMARY_HOVER', cssVar: '--heo-color-primary-hover', label: 'Màu chính khi di chuột', defaultValue: '#4f46e5' },
      { key: 'HEO_COLOR_PRIMARY_TEXT', cssVar: '--heo-color-primary-text', label: 'Chữ màu chính', defaultValue: '#ffffff' },
      { key: 'HEO_COLOR_ACCENT', cssVar: '--heo-color-accent', label: 'Màu nhấn', defaultValue: '#ca8a04' },
      { key: 'HEO_COLOR_BG', cssVar: '--heo-color-bg', label: 'Nền trang web', defaultValue: '#f7f9fe' },
      { key: 'HEO_COLOR_CARD', cssVar: '--heo-color-card', label: 'Nền thẻ', defaultValue: '#ffffff' },
      { key: 'HEO_COLOR_CARD_MUTED', cssVar: '--heo-color-card-muted', label: 'Nền phụ', defaultValue: '#f1f3f8' },
      { key: 'HEO_COLOR_BORDER', cssVar: '--heo-color-border', label: 'Đường viền', defaultValue: '#4f46e5' },
      { key: 'HEO_COLOR_TEXT', cssVar: '--heo-color-text-light', label: 'Chữ chính', defaultValue: '#000000' },
      { key: 'HEO_COLOR_TEXT_SECONDARY', cssVar: '--heo-color-text-secondary-light', label: 'Chữ phụ', defaultValue: '#4b5563' },
      { key: 'HEO_COLOR_BG_DARK', cssVar: '--heo-color-bg-dark', label: 'Chế độ tối: Nền trang', defaultValue: '#18171d' },
      { key: 'HEO_COLOR_CARD_DARK', cssVar: '--heo-color-card-dark', label: 'Chế độ tối: Nền thẻ', defaultValue: '#1e1e1e' },
      { key: 'HEO_COLOR_BORDER_DARK', cssVar: '--heo-color-border-dark', label: 'Chế độ tối: Viền nhấn', defaultValue: '#ca8a04' },
      { key: 'HEO_COLOR_TEXT_DARK', cssVar: '--heo-color-text-dark', label: 'Chế độ tối: Chữ chính', defaultValue: '#f3f4f6' },
      { key: 'HEO_COLOR_TEXT_SECONDARY_DARK', cssVar: '--heo-color-text-secondary-dark', label: 'Chế độ tối: Chữ phụ', defaultValue: '#d1d5db' }
    ]
  },
  hexo: {
    name: 'Hexo',
    summary: 'Cấu trúc blog cổ điển giống Hexo.',
    palette: [
      { key: 'HEXO_COLOR_PRIMARY', cssVar: '--hexo-color-primary-light', label: 'Màu chính', defaultValue: '#928CEE' },
      { key: 'HEXO_COLOR_BG', cssVar: '--hexo-color-bg-light', label: 'Nền trang web', defaultValue: '#f5f5f5' },
      { key: 'HEXO_COLOR_CARD', cssVar: '--hexo-color-card-light', label: 'Nền thẻ', defaultValue: '#ffffff' },
      { key: 'HEXO_COLOR_TITLE', cssVar: '--hexo-color-title-light', label: 'Chữ tiêu đề', defaultValue: '#4b5563' },
      { key: 'HEXO_COLOR_TEXT', cssVar: '--hexo-color-text-light', label: 'Chữ nội dung', defaultValue: '#374151' },
      { key: 'HEXO_COLOR_TEXT_SECONDARY', cssVar: '--hexo-color-text-secondary-light', label: 'Chữ phụ', defaultValue: '#9ca3af' },
      { key: 'HEXO_COLOR_BORDER', cssVar: '--hexo-color-border-light', label: 'Đường viền', defaultValue: '#e5e7eb' },
      { key: 'HEXO_COLOR_PRIMARY_DARK', cssVar: '--hexo-color-primary-dark', label: 'Chế độ tối: Màu chính', defaultValue: '#928CEE' },
      { key: 'HEXO_COLOR_BG_DARK', cssVar: '--hexo-color-bg-dark', label: 'Chế độ tối: Nền trang', defaultValue: '#000000' },
      { key: 'HEXO_COLOR_CARD_DARK', cssVar: '--hexo-color-card-dark', label: 'Chế độ tối: Nền thẻ', defaultValue: '#101414' },
      { key: 'HEXO_COLOR_TITLE_DARK', cssVar: '--hexo-color-title-dark', label: 'Chế độ tối: Chữ tiêu đề', defaultValue: '#f3f4f6' },
      { key: 'HEXO_COLOR_TEXT_DARK', cssVar: '--hexo-color-text-dark', label: 'Chế độ tối: Chữ nội dung', defaultValue: '#d1d5db' },
      { key: 'HEXO_COLOR_TEXT_SECONDARY_DARK', cssVar: '--hexo-color-text-secondary-dark', label: 'Chế độ tối: Chữ phụ', defaultValue: '#6b7280' },
      { key: 'HEXO_COLOR_BORDER_DARK', cssVar: '--hexo-color-border-dark', label: 'Chế độ tối: Đường viền', defaultValue: '#000000' }
    ]
  },
  nobelium: {
    name: 'Nobelium',
    summary: 'Phong cách tối giản giống Nobelium.',
    palette: [
      { key: 'NOBELIUM_COLOR_PRIMARY', cssVar: '--nobelium-color-primary', label: 'Màu chính', defaultValue: '#6b7280' }
    ]
  },
  opc: {
    name: 'Opc',
    summary: 'Cổng công việc AI cá nhân, tập trung dự án, sản phẩm.',
    settings: [
      { key: 'OPC_NAME', label: 'Tên trên cùng', type: 'text', defaultValue: 'Tangly · 个人公司' },
      { key: 'OPC_KICKER', label: 'Thẻ trang chủ', type: 'text', defaultValue: '一人公司 / 独立开发者' },
      { key: 'OPC_TITLE', label: 'Tiêu đề chính', type: 'text', defaultValue: 'Tangly1024' },
      { key: 'OPC_SUBTITLE', label: 'Tiêu đề phụ', type: 'text', defaultValue: '一人公司的 AI 任务流水线实验室' },
      { key: 'OPC_DESCRIPTION', label: 'Giới thiệu chính', type: 'text', defaultValue: '我把 AI 当作能力入口，而不是模拟公司部门开会；用任务文件、产物路径和验收标准，运行内容、产品与交易实验。' },
      { key: 'OPC_PRIMARY_TEXT', label: 'Chữ nút chính', type: 'text', defaultValue: '查看 NotionNext' },
      { key: 'OPC_PRIMARY_URL', label: 'Link nút chính', type: 'text', defaultValue: 'https://preview.tangly1024.com' },
      { key: 'OPC_SECONDARY_TEXT', label: 'Chữ nút phụ', type: 'text', defaultValue: '阅读长期记录' },
      { key: 'OPC_SECONDARY_URL', label: 'Link nút phụ', type: 'text', defaultValue: 'https://blog.tangly1024.com' },
      { key: 'OPC_STATUS_TEXT', label: 'Thẻ trạng thái', type: 'text', defaultValue: '持续公开构建' },
      { key: 'OPC_CARD_TITLE', label: 'Tiêu đề thẻ', type: 'text', defaultValue: '可验收的 AI 生产流水线' },
      { key: 'OPC_CARD_DESCRIPTION', label: 'Mô tả thẻ', type: 'text', defaultValue: '每轮只推进一个最小可验证目标：先买或接入成熟方案，再复制成熟做法，最后才自研；执行 AI 只领取一张任务单，交付文件后结束。' },
      { key: 'OPC_NOW_TITLE', label: 'Tiêu đề gần đây', type: 'text', defaultValue: '最近正在做什么' },
      { key: 'OPC_NOW_DESCRIPTION', label: 'Mô tả gần đây', type: 'text', defaultValue: '当前所有方向都按 ready、running、review、done 的流水线推进，只统计有效产物、验收结果和真实业务数据。' },
      { key: 'OPC_NOW_ITEMS', label: 'Thẻ gần đây', type: 'text', defaultValue: '游戏,小说,短剧,工具产品,流量媒体,AI企业工作流,量化交易' }
    ]
  },
  plog: {
    name: 'Plog',
    summary: 'Tập trung vào hình ảnh và bài viết ngắn.',
    palette: [
      { key: 'PLOG_COLOR_PRIMARY', cssVar: '--plog-color-primary', label: 'Màu chính', defaultValue: '#1d4ed8' }
    ]
  },
  gitbook: {
    name: 'GitBook',
    summary: 'Cấu trúc thư mục dạng tài liệu và cẩm nang.',
    palette: [
      { key: 'GITBOOK_COLOR_PRIMARY', cssVar: '--gitbook-color-primary', label: 'Màu chính', defaultValue: '#16a34a' }
    ]
  },
  fuwari: {
    name: 'Fuwari',
    summary: 'Hai cột phong cách Nhật Bản với bảng màu.',
    palette: [
      { key: 'FUWARI_THEME_COLOR_HUE', cssVar: '--fuwari-primary', label: 'Tông màu chính', defaultValue: '#b8a320' }
    ]
  },
  fukasawa: {
    name: 'Fukasawa',
    summary: 'Nhiều cột kiểu Fukasawa, thông tin dày đặc ở bên.',
    palette: [
      { key: 'FUKASAWA_COLOR_BG', cssVar: '--fukasawa-color-bg', label: 'Nền trang web', defaultValue: '#eeedee' },
      { key: 'FUKASAWA_COLOR_CARD', cssVar: '--fukasawa-color-card', label: 'Nền thẻ', defaultValue: '#ffffff' },
      { key: 'FUKASAWA_COLOR_BORDER', cssVar: '--fukasawa-color-border', label: 'Đường viền', defaultValue: '#d4d4d8' },
      { key: 'FUKASAWA_COLOR_TEXT', cssVar: '--fukasawa-color-text', label: 'Chữ chính', defaultValue: '#18181b' },
      { key: 'FUKASAWA_COLOR_TEXT_SECONDARY', cssVar: '--fukasawa-color-text-secondary', label: 'Chữ phụ', defaultValue: '#52525b' },
      { key: 'FUKASAWA_COLOR_BG_DARK', cssVar: '--fukasawa-color-bg-dark', label: 'Chế độ tối: Nền trang', defaultValue: '#111827' },
      { key: 'FUKASAWA_COLOR_CARD_DARK', cssVar: '--fukasawa-color-card-dark', label: 'Chế độ tối: Nền thẻ', defaultValue: '#1f2937' },
      { key: 'FUKASAWA_COLOR_BORDER_DARK', cssVar: '--fukasawa-color-border-dark', label: 'Chế độ tối: Đường viền', defaultValue: '#374151' },
      { key: 'FUKASAWA_COLOR_TEXT_DARK', cssVar: '--fukasawa-color-text-dark', label: 'Chế độ tối: Chữ chính', defaultValue: '#e5e7eb' },
      { key: 'FUKASAWA_COLOR_TEXT_SECONDARY_DARK', cssVar: '--fukasawa-color-text-secondary-dark', label: 'Chế độ tối: Chữ phụ', defaultValue: '#d1d5db' }
    ]
  },
  typography: {
    name: 'Typography',
    summary: 'Ưu tiên bố cục, nhấn mạnh việc đọc văn bản.',
    settings: [
      { key: 'TYPOGRAPHY_BLOG_NAME', label: 'Tên trang web', type: 'text', defaultValue: '活字印刷' },
      { key: 'TYPOGRAPHY_BLOG_NAME_EN', label: 'Tên tiếng Anh', type: 'text', defaultValue: 'Typography' },
      { key: 'TYPOGRAPHY_POST_AD_ENABLE', label: 'Quảng cáo danh sách bài', type: 'boolean', defaultValue: false },
      { key: 'TYPOGRAPHY_POST_COVER_ENABLE', label: 'Ảnh bìa bài viết', type: 'boolean', defaultValue: false },
      { key: 'TYPOGRAPHY_ARTICLE_RECOMMEND_POSTS', label: 'Đề xuất bài viết', type: 'boolean', defaultValue: true }
    ],
    palette: [
      { key: 'TYPOGRAPHY_COLOR_PRIMARY', cssVar: '--typography-color-primary', label: 'Màu chính', defaultValue: '#2e405b' },
      { key: 'TYPOGRAPHY_COLOR_TITLE', cssVar: '--typography-color-title', label: 'Màu tiêu đề', defaultValue: '#276077' }
    ]
  },
  nav: {
    name: 'Nav',
    summary: 'Bố cục hiện đại với thanh điều hướng ở trên.',
    rootId: 'theme-onenav',
    palette: [
      { key: 'NAV_COLOR_BG', cssVar: '--nav-color-bg', label: 'Nền trang web', defaultValue: '#fbfbfb' },
      { key: 'NAV_COLOR_TEXT', cssVar: '--nav-color-text', label: 'Chữ menu', defaultValue: '#8c8c8c' },
      { key: 'NAV_COLOR_TEXT_HOVER', cssVar: '--nav-color-text-hover', label: 'Menu khi di chuột', defaultValue: '#000000' }
    ]
  },
  starter: {
    name: 'Starter',
    summary: 'Trang đích và mẫu tiếp thị theo khối.',
    palette: [
      { key: 'STARTER_COLOR_PRIMARY', cssVar: '--starter-color-primary', label: 'Màu chính', defaultValue: '#3758f9' },
      { key: 'STARTER_COLOR_PRIMARY_HOVER', cssVar: '--starter-color-primary-hover', label: 'Màu chính khi di chuột', defaultValue: '#1b44c8' },
      { key: 'STARTER_COLOR_DARK', cssVar: '--starter-color-dark', label: 'Nền tối', defaultValue: '#111928' },
      { key: 'STARTER_COLOR_TEXT_MUTED', cssVar: '--starter-color-text-muted', label: 'Chữ phụ', defaultValue: '#637381' }
    ]
  },
  commerce: {
    name: 'Commerce',
    summary: 'Cấu trúc trang hiển thị thương mại điện tử và sản phẩm.',
    palette: [
      { key: 'COMMERCE_COLOR_PRIMARY', cssVar: '--commerce-color-primary', label: 'Màu chính', defaultValue: '#D2232A' },
      { key: 'COMMERCE_COLOR_BG', cssVar: '--commerce-color-bg', label: 'Nền trang web', defaultValue: '#f5f5f5' }
    ]
  },
  magzine: {
    name: 'Magazine',
    summary: 'Bìa tạp chí và phong cách danh sách ảnh lớn.',
    palette: [
      { key: 'MAGZINE_COLOR_PRIMARY', cssVar: '--magzine-color-primary', label: 'Màu chính', defaultValue: '#7BE986' },
      { key: 'MAGZINE_COLOR_BG', cssVar: '--magzine-color-bg', label: 'Nền trang web', defaultValue: '#f6f6f1' },
      { key: 'MAGZINE_COLOR_CARD', cssVar: '--magzine-color-card', label: 'Nền thẻ', defaultValue: '#ffffff' },
      { key: 'MAGZINE_COLOR_TEXT', cssVar: '--magzine-color-text', label: 'Chữ chính', defaultValue: '#111827' },
      { key: 'MAGZINE_COLOR_BORDER', cssVar: '--magzine-color-border', label: 'Đường viền', defaultValue: '#d1d5db' },
      { key: 'MAGZINE_COLOR_SCROLLBAR', cssVar: '--magzine-color-scrollbar', label: 'Thanh cuộn', defaultValue: '#4e4e4e' },
      { key: 'MAGZINE_COLOR_PRIMARY_DARK', cssVar: '--magzine-color-primary-dark', label: 'Chế độ tối: Màu chính', defaultValue: '#62BA6B' },
      { key: 'MAGZINE_COLOR_BG_DARK', cssVar: '--magzine-color-bg-dark', label: 'Chế độ tối: Nền trang', defaultValue: '#0b0f19' },
      { key: 'MAGZINE_COLOR_NAV_DARK', cssVar: '--magzine-color-nav-dark', label: 'Chế độ tối: Nền điều hướng', defaultValue: '#111827' },
      { key: 'MAGZINE_COLOR_CARD_DARK', cssVar: '--magzine-color-card-dark', label: 'Chế độ tối: Nền thẻ', defaultValue: '#1f2937' },
      { key: 'MAGZINE_COLOR_TEXT_DARK', cssVar: '--magzine-color-text-dark', label: 'Chế độ tối: Chữ chính', defaultValue: '#e5e7eb' },
      { key: 'MAGZINE_COLOR_BORDER_DARK', cssVar: '--magzine-color-border-dark', label: 'Chế độ tối: Đường viền', defaultValue: '#374151' }
    ]
  },
  movie: {
    name: 'Movie',
    summary: 'Hiển thị tường phim và poster.',
    palette: [
      { key: 'MOVIE_COLOR_PRIMARY', cssVar: '--movie-color-primary', label: 'Màu chính', defaultValue: '#2563eb' },
      { key: 'MOVIE_COLOR_PRIMARY_DARK', cssVar: '--movie-color-primary-dark', label: 'Màu chính (tối)', defaultValue: '#ca8a04' }
    ]
  },
  photo: {
    name: 'Photo',
    summary: 'Tác phẩm nhiếp ảnh và lưới album ảnh.',
    palette: [
      { key: 'PHOTO_COLOR_PRIMARY', cssVar: '--photo-color-primary', label: 'Màu chính', defaultValue: '#2563eb' },
      { key: 'PHOTO_COLOR_PRIMARY_DARK', cssVar: '--photo-color-primary-dark', label: 'Màu chính (tối)', defaultValue: '#ca8a04' }
    ]
  },
  game: {
    name: 'Game',
    summary: 'Trang trí phần tử trò chơi và pixel.',
    palette: [
      { key: 'GAME_COLOR_BG', cssVar: '--game-color-bg', label: 'Nền trang web', defaultValue: '#ffffff' },
      { key: 'GAME_COLOR_SCROLLBAR', cssVar: '--game-color-scrollbar', label: 'Thanh cuộn', defaultValue: '#4e4e4e' },
      { key: 'GAME_COLOR_PRIMARY', cssVar: '--game-color-primary', label: 'Màu chính', defaultValue: '#22c55e' }
    ]
  },
  example: {
    name: 'Example',
    summary: 'Bộ khung mặc định.',
    palette: [
      { key: 'EXAMPLE_COLOR_PRIMARY', cssVar: '--example-color-primary', label: 'Màu chính', defaultValue: '#6b7280' },
      { key: 'EXAMPLE_COLOR_BG', cssVar: '--example-color-bg', label: 'Nền trang web', defaultValue: '#f8fafc' },
      { key: 'EXAMPLE_COLOR_CARD', cssVar: '--example-color-card', label: 'Nền thẻ', defaultValue: '#ffffff' },
      { key: 'EXAMPLE_COLOR_BORDER', cssVar: '--example-color-border', label: 'Đường viền', defaultValue: '#e5e7eb' },
      { key: 'EXAMPLE_COLOR_TEXT', cssVar: '--example-color-text', label: 'Chữ chính', defaultValue: '#111827' },
      { key: 'EXAMPLE_COLOR_BG_DARK', cssVar: '--example-color-bg-dark', label: 'Chế độ tối: Nền trang', defaultValue: '#0f172a' },
      { key: 'EXAMPLE_COLOR_CARD_DARK', cssVar: '--example-color-card-dark', label: 'Chế độ tối: Nền thẻ', defaultValue: '#111827' },
      { key: 'EXAMPLE_COLOR_BORDER_DARK', cssVar: '--example-color-border-dark', label: 'Chế độ tối: Đường viền', defaultValue: '#334155' },
      { key: 'EXAMPLE_COLOR_TEXT_DARK', cssVar: '--example-color-text-dark', label: 'Chế độ tối: Chữ chính', defaultValue: '#e5e7eb' }
    ]
  },
  proxio: {
    name: 'Proxio',
    summary: 'Danh mục đầu tư và hiển thị thương hiệu cá nhân.',
    palette: [
      { key: 'PROXIO_COLOR_PRIMARY', cssVar: '--proxio-color-primary', label: 'Màu chính', defaultValue: '#3758f9' },
      { key: 'PROXIO_COLOR_PRIMARY_HOVER', cssVar: '--proxio-color-primary-hover', label: 'Màu chính khi di chuột', defaultValue: '#1b44c8' },
      { key: 'PROXIO_COLOR_BG', cssVar: '--proxio-color-bg', label: 'Nền trang web', defaultValue: '#ffffff' },
      { key: 'PROXIO_COLOR_DARK', cssVar: '--proxio-color-dark', label: 'Nền tối', defaultValue: '#121212' },
      { key: 'PROXIO_COLOR_TEXT_MUTED', cssVar: '--proxio-color-text-muted', label: 'Chữ phụ', defaultValue: '#637381' }
    ]
  },
  landing: {
    name: 'Landing',
    summary: 'Hạ cánh một trang và cuộn theo vùng.',
    palette: [
      { key: 'LANDING_COLOR_PRIMARY', cssVar: '--landing-color-primary', label: 'Màu chính', defaultValue: '#ef4444' }
    ]
  },
  claude: {
    name: 'Claude',
    summary: 'Tài liệu giống Claude Docs.',
    palette: [
      { key: 'CLAUDE_COLOR_ACCENT', cssVar: '--claude-accent-light', label: 'Màu nhấn', defaultValue: '#DA7756' },
      { key: 'CLAUDE_COLOR_ACCENT_HOVER', cssVar: '--claude-accent-hover-light', label: 'Màu nhấn khi di chuột', defaultValue: '#C06042' },
      { key: 'CLAUDE_COLOR_BG', cssVar: '--claude-bg-light', label: 'Nền trang web', defaultValue: '#ffffff' },
      { key: 'CLAUDE_COLOR_CARD', cssVar: '--claude-bg-secondary-light', label: 'Nền thẻ', defaultValue: '#F3F3EE' },
      { key: 'CLAUDE_COLOR_TEXT', cssVar: '--claude-text-primary-light', label: 'Chữ chính', defaultValue: '#1A1A1A' },
      { key: 'CLAUDE_COLOR_TEXT_SECONDARY', cssVar: '--claude-text-secondary-light', label: 'Chữ phụ', defaultValue: '#5C5C5C' },
      { key: 'CLAUDE_COLOR_TEXT_TERTIARY', cssVar: '--claude-text-tertiary-light', label: 'Chữ mờ', defaultValue: '#8C8C8C' },
      { key: 'CLAUDE_COLOR_BORDER', cssVar: '--claude-border-light', label: 'Đường viền', defaultValue: '#E5E5E0' },
      { key: 'CLAUDE_COLOR_ACCENT_DARK', cssVar: '--claude-accent-dark', label: 'Chế độ tối: Màu nhấn', defaultValue: '#D4A27F' },
      { key: 'CLAUDE_COLOR_ACCENT_HOVER_DARK', cssVar: '--claude-accent-hover-dark', label: 'Chế độ tối: Màu nhấn (di chuột)', defaultValue: '#DA7756' },
      { key: 'CLAUDE_COLOR_BG_DARK', cssVar: '--claude-bg-dark', label: 'Chế độ tối: Nền trang', defaultValue: '#1A1915' },
      { key: 'CLAUDE_COLOR_CARD_DARK', cssVar: '--claude-bg-secondary-dark', label: 'Chế độ tối: Nền thẻ', defaultValue: '#242320' },
      { key: 'CLAUDE_COLOR_TEXT_DARK', cssVar: '--claude-text-primary-dark', label: 'Chế độ tối: Chữ chính', defaultValue: '#9E9E9E' },
      { key: 'CLAUDE_COLOR_TEXT_SECONDARY_DARK', cssVar: '--claude-text-secondary-dark', label: 'Chế độ tối: Chữ phụ', defaultValue: '#A0A09C' },
      { key: 'CLAUDE_COLOR_TEXT_TERTIARY_DARK', cssVar: '--claude-text-tertiary-dark', label: 'Chế độ tối: Chữ mờ', defaultValue: '#6E6E6A' },
      { key: 'CLAUDE_COLOR_BORDER_DARK', cssVar: '--claude-border-dark', label: 'Chế độ tối: Đường viền', defaultValue: '#333330' }
    ]
  },
  thoughtlite: {
    name: 'ThoughtLite',
    summary: 'Thời gian đọc nhẹ nhàng với thẻ Latest, một cột.',
    palette: [
      { key: 'THOUGHTLITE_COLOR_BG', cssVar: '--tl-bg', label: 'Nền trang web', defaultValue: '#faf9f7' },
      { key: 'THOUGHTLITE_COLOR_SURFACE', cssVar: '--tl-surface', label: 'Nền thẻ', defaultValue: '#ffffff' },
      { key: 'THOUGHTLITE_COLOR_TEXT', cssVar: '--tl-text', label: 'Chữ chính', defaultValue: '#1a1a1a' },
      { key: 'THOUGHTLITE_COLOR_MUTED', cssVar: '--tl-muted', label: 'Chữ phụ', defaultValue: '#6b6b6b' },
      { key: 'THOUGHTLITE_COLOR_BORDER', cssVar: '--tl-border', label: 'Đường viền', defaultValue: '#e8e6e3' },
      { key: 'THOUGHTLITE_COLOR_ACCENT', cssVar: '--tl-accent', label: 'Màu nhấn', defaultValue: '#2563eb' }
    ]
  },
  xuhome: {
    name: 'XuHome',
    summary: 'Theme blog thô mộc, viền dày, bóng đổ, hiệu ứng gõ phím.',
    tier: 'free',
    palette: [
      { key: 'XUHOME_COLOR_PRIMARY', cssVar: '--xuhome-color-primary', label: 'Màu chính', defaultValue: '#0284c7' },
      { key: 'XUHOME_COLOR_PRIMARY_HOVER', cssVar: '--xuhome-color-primary-hover', label: 'Màu chính khi di chuột', defaultValue: '#0ea5e9' },
      { key: 'XUHOME_COLOR_ACCENT', cssVar: '--xuhome-color-accent', label: 'Màu nhấn', defaultValue: '#fde68a' },
      { key: 'XUHOME_COLOR_BG', cssVar: '--xuhome-color-bg', label: 'Nền trang web', defaultValue: '#faf8f5' },
      { key: 'XUHOME_COLOR_CARD', cssVar: '--xuhome-color-card', label: 'Nền thẻ', defaultValue: '#ffffff' },
      { key: 'XUHOME_COLOR_TEXT', cssVar: '--xuhome-color-text', label: 'Chữ chính', defaultValue: '#0f172a' },
      { key: 'XUHOME_COLOR_TEXT_SECONDARY', cssVar: '--xuhome-color-text-secondary', label: 'Chữ phụ', defaultValue: '#475569' },
      { key: 'XUHOME_COLOR_BORDER', cssVar: '--xuhome-color-border', label: 'Đường viền', defaultValue: '#0284c7' },
      { key: 'XUHOME_HERO_TITLE_COLOR', cssVar: '--xuhome-hero-title-color', label: 'Màu tiêu đề trang chủ', defaultValue: '#0284c7' },
      { key: 'XUHOME_HERO_BIO_COLOR', cssVar: '--xuhome-hero-bio-color', label: 'Màu giới thiệu trang chủ', defaultValue: '#475569' },
      { key: 'XUHOME_COLOR_PRIMARY_DARK', cssVar: '--xuhome-color-primary-dark', label: 'Chế độ tối: Màu chính', defaultValue: '#38bdf8' },
      { key: 'XUHOME_COLOR_PRIMARY_HOVER_DARK', cssVar: '--xuhome-color-primary-hover-dark', label: 'Chế độ tối: Màu chính khi di chuột', defaultValue: '#7dd3fc' },
      { key: 'XUHOME_COLOR_ACCENT_DARK', cssVar: '--xuhome-color-accent-dark', label: 'Chế độ tối: Màu nhấn', defaultValue: '#facc15' },
      { key: 'XUHOME_COLOR_BG_DARK', cssVar: '--xuhome-color-bg-dark', label: 'Chế độ tối: Nền trang', defaultValue: '#0b1120' },
      { key: 'XUHOME_COLOR_CARD_DARK', cssVar: '--xuhome-color-card-dark', label: 'Chế độ tối: Nền thẻ', defaultValue: '#172033' },
      { key: 'XUHOME_COLOR_TEXT_DARK', cssVar: '--xuhome-color-text-dark', label: 'Chế độ tối: Chữ chính', defaultValue: '#f8fafc' },
      { key: 'XUHOME_COLOR_TEXT_SECONDARY_DARK', cssVar: '--xuhome-color-text-secondary-dark', label: 'Chế độ tối: Chữ phụ', defaultValue: '#cbd5e1' },
      { key: 'XUHOME_COLOR_BORDER_DARK', cssVar: '--xuhome-color-border-dark', label: 'Chế độ tối: Đường viền', defaultValue: '#38bdf8' }
    ]
  }
}

const THEME_CONFIGS = {
  claude: claudeConfig,
  commerce: commerceConfig,
  endspace: endspaceConfig,
  example: exampleConfig,
  fukasawa: fukasawaConfig,
  fuwari: fuwariConfig,
  game: gameConfig,
  gitbook: gitbookConfig,
  heo: heoConfig,
  hexo: hexoConfig,
  landing: landingConfig,
  magzine: magzineConfig,
  matery: materyConfig,
  medium: mediumConfig,
  movie: movieConfig,
  nav: navConfig,
  next: nextConfig,
  nobelium: nobeliumConfig,
  opc: opcConfig,
  photo: photoConfig,
  plog: plogConfig,
  proxio: proxioConfig,
  simple: simpleConfig,
  starter: starterConfig,
  thoughtlite: thoughtliteConfig,
  typography: typographyConfig,
  xuhome: xuhomeConfig
}

function inferThemeSettings(themeId, manualSettings = []) {
  const config = THEME_CONFIGS[themeId] || {}
  const manualKeys = new Set(manualSettings.map(item => item.key))
  return Object.entries(config)
    .filter(([key, value]) => {
      if (manualKeys.has(key)) return false
      if (/_COLOR(?:_|$)|_THEME_COLOR(?:_|$)/.test(key)) return false
      return ['boolean', 'string', 'number'].includes(typeof value)
    })
    .map(([key, value]) => normalizeSetting({
      key,
      label: formatConfigLabel(key, themeId),
      type: typeof value === 'boolean' ? 'boolean' : typeof value === 'number' ? 'number' : 'text',
      defaultValue: value
    }, themeId))
}

const SELECT_OPTIONS_BY_KEY = {
  NEXT_NAV_TYPE: [
    { label: 'Ghim trên đầu', value: 'fixed' },
    { label: 'Cuộn để ẩn', value: 'autoCollapse' },
    { label: 'Điều hướng thường', value: 'normal' }
  ]
}

const CONFIG_LABEL_WORDS = {
  ABOUT: 'Giới thiệu',
  AD: 'Quảng cáo',
  ADSENSE: 'Adsense',
  ANALYTICS: 'Thống kê',
  ARCHIVE: 'Lưu trữ',
  AUTO: 'Tự động',
  BACKGROUND: 'Nền',
  BANNER: 'Banner',
  BLOG: 'Blog',
  BOOK: 'Tài liệu',
  BUTTON: 'Nút',
  CACHE: 'Bộ nhớ đệm',
  CAREER: 'Hồ sơ',
  CATEGORY: 'Danh mục',
  COLLAPSE: 'Thu gọn',
  COMMENT: 'Bình luận',
  CONTACT: 'Liên hệ',
  COUNT: 'Số lượng',
  COVER: 'Ảnh bìa',
  CTA: 'Nút hành động',
  DARK: 'Chế độ tối',
  DEFAULT: 'Mặc định',
  DETAIL: 'Chi tiết',
  ENABLE: 'Bật',
  FAQ: 'Hỏi đáp',
  FEATURE: 'Tính năng',
  FIXED: 'Cố định',
  FORCE: 'Bắt buộc',
  HEADER: 'Tiêu đề',
  HERO: 'Trang chủ',
  HIDDEN: 'Ẩn',
  HOME: 'Trang chủ',
  HOVER: 'Di chuột',
  IMAGE: 'Ảnh',
  IMG: 'Ảnh',
  INDEX: 'Trang chủ',
  LATEST: 'Bài mới nhất',
  LAYOUT: 'Bố cục',
  LEVEL3: 'Thư mục cấp 3',
  LIST: 'Danh sách',
  MAPS: 'Bản đồ',
  MENU: 'Menu',
  MINIMAL: 'Tối giản',
  MODE: 'Chế độ',
  NAME: 'Tên',
  NAV: 'Điều hướng',
  NOTION: 'Notion',
  PAGE: 'Trang',
  PERSIST: 'Lưu trữ lâu dài',
  POST: 'Bài viết',
  POSTS: 'Bài viết',
  PREVIEW: 'Xem trước',
  PRICING: 'Bảng giá',
  RANDOM: 'Bài ngẫu nhiên',
  README: 'README',
  RECOMMEND: 'Đề xuất',
  REDIRECT: 'Chuyển hướng',
  RSS: 'RSS',
  SEARCH: 'Tìm kiếm',
  SHOW: 'Hiển thị',
  SORT: 'Sắp xếp',
  SUMMARY: 'Tóm tắt',
  TAG: 'Thẻ',
  TESTIMONIALS: 'Nhận xét',
  TEXT: 'Chữ',
  TITLE: 'Tiêu đề',
  TO: 'Đến',
  TOC: 'Mục lục',
  TOP: 'Lên đầu trang',
  TYPE: 'Loại',
  UPDATE: 'Cập nhật',
  URL: 'Đường dẫn',
  VERTICAL: 'Dọc',
  WIDGET: 'Công cụ nổi',
  WWADS: 'Quảng cáo WW'
}

const CONFIG_HELP_RULES = [
  [/MENU_(CATEGORY|TAG|ARCHIVE|SEARCH|RSS|INDEX|HOME)/, 'Cho phép hiển thị/ẩn trên menu điều hướng.'],
  [/POST_LIST_COVER/, 'Cho phép hiển thị/ẩn ảnh bìa trên danh sách bài viết.'],
  [/POST_LIST_(SUMMARY|PREVIEW)/, 'Cho phép hiển thị/ẩn tóm tắt bài viết trên trang chủ.'],
  [/COVER_DEFAULT|COVER_FORCE/, 'Tự động sử dụng ảnh bìa mặc định nếu bài viết không có ảnh.'],
  [/WIDGET_/, 'Cho phép hiển thị/ẩn các công cụ nổi (Widget) hoặc cột bên.'],
  [/HOME_.*ENABLE|HERO_ENABLE|BANNER_ENABLE/, 'Cho phép hiển thị/ẩn tính năng này trên trang chủ.'],
  [/COUNT$/, 'Giới hạn số lượng hiển thị cho tính năng này.'],
  [/NAV_TYPE$/, 'Cài đặt chế độ ghim thanh điều hướng.'],
  [/LAYOUT_VERTICAL$/, 'Cài đặt bố cục trang bài viết (trên-dưới hoặc trái-phải).'],
  [/REDIRECT_ENABLE$/, 'Bật/tắt tính năng tự động chuyển hướng đường dẫn bài viết.'],
  [/CACHE_ENABLED|PERSIST_ENABLED/, 'Bật/tắt tính năng lưu trữ bộ nhớ đệm trên trình duyệt.']
]

function normalizeSetting(item, themeId) {
  const options = item.options || inferSelectOptions(item)
  return {
    ...item,
    label: item.label || formatConfigLabel(item.key, themeId),
    help: item.help || formatConfigHelp(item.key),
    type: options ? 'select' : item.type,
    options
  }
}

function inferSelectOptions(item) {
  if (SELECT_OPTIONS_BY_KEY[item.key]) return SELECT_OPTIONS_BY_KEY[item.key]
  if (typeof item.defaultValue === 'string' && /^(true|false)$/i.test(item.defaultValue)) {
    return [
      { label: 'Bật', value: 'true' },
      { label: 'Tắt', value: 'false' }
    ]
  }
  return null
}

function formatConfigHelp(key) {
  const rule = CONFIG_HELP_RULES.find(([pattern]) => pattern.test(key))
  if (rule) return rule[1]
  if (/_ENABLE$/.test(key)) return 'Bật/tắt tính năng này.'
  if (/_TEXT$|_TITLE$|_NAME$/.test(key)) return 'Thay đổi nội dung văn bản sẽ được hiển thị trên web.'
  if (/_URL$/.test(key)) return 'Thay đổi đường dẫn đích khi nhấn vào.'
  return 'Xem trước trực tiếp cấu hình, bạn có thể copy vào Notion Config để lưu vĩnh viễn.'
}

function formatConfigLabel(key, themeId) {
  const prefix = `${String(themeId).toUpperCase()}_`
  return key
    .replace(prefix, '')
    .split('_')
    .filter(Boolean)
    .map(word => CONFIG_LABEL_WORDS[word] || word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * @param {string} themeId themes 目录名
 * @returns {{ id: string, name: string, summary: string, coverPng: string, coverWebp: string | null, rootId: string | undefined, tier: 'free' | 'paid', settings: Array<{ key: string, label: string, type: 'boolean' | 'text' | 'number' | 'select', defaultValue: string | number | boolean, options?: Array<{ label: string, value: string | number | boolean }> }>, palette: Array<{ key: string, cssVar: string, label: string, defaultValue: string }> }}
 */
export function getThemeSwitchMeta(themeId) {
  const id = themeId == null ? '' : String(themeId).trim()
  const row = THEME_SWITCH_MANIFEST[id] || {}

  const tier = row.tier === 'paid' ? 'paid' : 'free'

  const name =
    typeof row.name === 'string' && row.name.trim()
      ? row.name.trim()
      : formatThemeId(id)

  const summary =
    typeof row.summary === 'string' ? row.summary.trim() : ''

  const coverPng =
    typeof row.cover === 'string' && row.cover.trim()
      ? row.cover.trim()
      : `/images/themes-preview/${id}.png`

  let coverWebp = null
  if (row.coverWebp === '') {
    coverWebp = null
  } else if (typeof row.coverWebp === 'string' && row.coverWebp.trim()) {
    coverWebp = row.coverWebp.trim()
  } else {
    coverWebp = `/images/themes-preview/${id}.webp`
  }

  const palette = withBaseThemePalette(id, Array.isArray(row.palette) ? row.palette : [])
  const manualSettings = Array.isArray(row.settings)
    ? row.settings.map(item => normalizeSetting(item, id))
    : []
  const settings = manualSettings.concat(inferThemeSettings(id, manualSettings))

  const rootId =
    typeof row.rootId === 'string' && row.rootId.trim()
      ? row.rootId.trim()
      : undefined

  return { id, name, summary, coverPng, coverWebp, rootId, tier, settings, palette }
}

export function formatThemeId(id) {
  const s = id == null ? '' : String(id).trim()
  if (!s) return ''
  return s
    .split(/[-_]/)
    .filter(Boolean)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ')
}
import claudeConfig from '@/themes/claude/config'
import commerceConfig from '@/themes/commerce/config'
import endspaceConfig from '@/themes/endspace/config'
import exampleConfig from '@/themes/example/config'
import fukasawaConfig from '@/themes/fukasawa/config'
import fuwariConfig from '@/themes/fuwari/config'
import gameConfig from '@/themes/game/config'
import gitbookConfig from '@/themes/gitbook/config'
import heoConfig from '@/themes/heo/config'
import hexoConfig from '@/themes/hexo/config'
import { withBaseThemePalette } from '@/conf/themeColorPalette'
import landingConfig from '@/themes/landing/config'
import magzineConfig from '@/themes/magzine/config'
import materyConfig from '@/themes/matery/config'
import mediumConfig from '@/themes/medium/config'
import movieConfig from '@/themes/movie/config'
import navConfig from '@/themes/nav/config'
import nextConfig from '@/themes/next/config'
import nobeliumConfig from '@/themes/nobelium/config'
import opcConfig from '@/themes/opc/config'
import photoConfig from '@/themes/photo/config'
import plogConfig from '@/themes/plog/config'
import proxioConfig from '@/themes/proxio/config'
import simpleConfig from '@/themes/simple/config'
import starterConfig from '@/themes/starter/config'
import thoughtliteConfig from '@/themes/thoughtlite/config'
import typographyConfig from '@/themes/typography/config'
import xuhomeConfig from '@/themes/xuhome/config'
