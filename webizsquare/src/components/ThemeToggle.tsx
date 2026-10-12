'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  const currentTheme = resolvedTheme || theme
  const isDark = currentTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 transition-all shadow-sm focus:outline-none cursor-pointer theme-toggle-btn"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun size={19} className="text-amber-400" />
      ) : (
        <Moon size={19} className="text-gray-700" />
      )}
    </button>
  )
}
