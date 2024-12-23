'use client'
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import sun from "../../public/sun-icon.svg"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Image
      src={sun}
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  return (
    <div className="absolute top-5 right-5 z-50">
      {resolvedTheme === 'dark' ? (
        <FiSun 
          onClick={() => setTheme('light')} 
          className="text-white text-xl cursor-pointer transition-all duration-300 hover:scale-105"
        />
      ) : (
        <FiMoon 
          onClick={() => setTheme('dark')} 
          className="text-gray-800 text-xl cursor-pointer transition-all duration-300 hover:scale-105"
        />
      )}
    </div>
  )
}
