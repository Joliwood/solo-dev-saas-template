'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as JotaiProvider } from 'jotai'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <JotaiProvider>
        {children}
      </JotaiProvider>
    </NextThemesProvider>
  )
}
