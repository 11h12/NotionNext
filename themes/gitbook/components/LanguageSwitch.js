import { useGlobal } from '@/lib/global'
import { useEffect, useState } from 'react'

export default function LanguageSwitch() {
  const { lang, changeLang } = useGlobal()
  const isEn = lang === 'en-US'

  const toggleLanguage = () => {
    changeLang(isEn ? 'vi-VN' : 'en-US')
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
