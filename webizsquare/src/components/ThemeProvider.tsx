'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Clear any stale data-theme attribute so next-themes class-based switching is clean
    if (document.documentElement.hasAttribute('data-theme')) {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  )
}
