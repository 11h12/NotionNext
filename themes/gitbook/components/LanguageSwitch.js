import { useRouter } from 'next/router'
import { useState } from 'react'

export default function LanguageSwitch() {
  const router = useRouter()
  // Check if we are currently in an /en path
  const isEn = router.asPath.startsWith('/en')

  const toggleLanguage = () => {
    if (isEn) {
      // Go to VN (root)
      window.location.href = '/'
    } else {
      // Go to US (/en)
      window.location.href = '/en'
    }
  }

  return (
    <div 
      className='cursor-pointer text-sm font-semibold flex items-center h-full hover:scale-105 duration-150 transition-all text-gray-500 dark:text-gray-300 mx-2'
      onClick={toggleLanguage}
      title={isEn ? "Switch to Vietnamese" : "Switch to English"}
    >
      <i className='fas fa-globe mr-1'></i>
      <span>{isEn ? 'US' : 'VN'}</span>
    </div>
  )
}
