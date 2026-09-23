import { useRouter } from 'next/router'

export default function LanguageSwitch() {
  const router = useRouter()
  // Check the current locale from Next.js router
  const currentLocale = router.locale
  const isEn = currentLocale === 'en'

  const toggleLanguage = () => {
    const newLocale = isEn ? 'vi-VN' : 'en'
    // Preserve the current path, just switch the locale
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <div 
      className='cursor-pointer text-sm font-semibold flex items-center h-full hover:scale-105 duration-150 transition-all text-gray-500 dark:text-gray-300 mx-2'
      onClick={toggleLanguage}
      title={isEn ? "Chuyển sang tiếng Việt" : "Switch to English"}
    >
      <i className='fas fa-globe mr-1'></i>
      <span>{isEn ? 'US' : 'VN'}</span>
    </div>
  )
}
