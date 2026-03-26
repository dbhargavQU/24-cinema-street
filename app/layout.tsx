import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: '24 Cinema Street | We Create Cinema for Brands',
  description: 'A premium film production studio crafting cinematic advertising with the depth of cinema and the precision of advertising. Full AI Films, Hybrid Productions, and Traditional Filmmaking.',
  keywords: ['film production', 'cinematic advertising', 'AI films', 'video production', 'brand films'],
  openGraph: {
    title: '24 Cinema Street | We Create Cinema for Brands',
    description: 'Stories crafted with cinematic depth and advertising precision.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
