'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// This infers all valid props for NextThemesProvider, including attribute, defaultTheme, etc.
type NextThemesProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider(props: NextThemesProviderProps) {
  return <NextThemesProvider {...props} />
}
