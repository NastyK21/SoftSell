import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftSell - Tech Solutions",
  description: "Modern software solutions for your business. Secure, scalable, and designed for modern enterprises.",
  keywords: ["software", "tech solutions", "SaaS", "business software", "enterprise solutions"],
  authors: [{ name: "SoftSell Team" }],
  creator: "SoftSell",
  publisher: "SoftSell Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softsell.com",
    title: "SoftSell - Tech Solutions",
    description: "Modern software solutions for your business",
    siteName: "SoftSell",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftSell - Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell - Tech Solutions",
    description: "Modern software solutions for your business",
    images: ["/twitter-image.png"],
    creator: "@softsell",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://softsell.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0070cc" />
        <link rel="canonical" href="https://softsell.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
