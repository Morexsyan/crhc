import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Noto_Sans_TC } from "next/font/google"
import "./globals.css"
import MatrixBackground from "@/components/matrix-background"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "CRHC - 高雄市新莊高中電腦研究社",
  description: "Computer Research Hilsin Chuang - 探索科技，創造未來。駭客風格的電研社官網。",
  generator: "v0.app",
  keywords: "CRHC, 電研社, 程式設計, 駭客, 高雄新莊高中",
  authors: [{ name: "CRHC" }],
  openGraph: {
    title: "CRHC - 高雄市新莊高中電腦研究社",
    description: "Computer Research Hilsin Chuang - 探索科技，創造未來",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRHC - 高雄市新莊高中電腦研究社",
    description: "Computer Research Hilsin Chuang - 探索科技，創造未來",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" className={`${jetbrainsMono.variable} ${notoSansTC.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          html {
            font-family: ${jetbrainsMono.style.fontFamily}, ${notoSansTC.style.fontFamily}, monospace;
            --font-mono: ${jetbrainsMono.variable};
            --font-sans: ${notoSansTC.variable};
          }
        `}</style>
      </head>
      <body className="antialiased">
        <MatrixBackground />
        {children}
      </body>
    </html>
  )
}
