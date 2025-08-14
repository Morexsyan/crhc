"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [memberCount, setMemberCount] = useState(0)
  const [projectCount, setProjectCount] = useState(0)
  const [isNavScrolled, setIsNavScrolled] = useState(false)

  const heroText = "CRHC.initialize();\n// Computer Research Hilsin Chuang\n// 探索科技，創造未來"

  useEffect(() => {
    let i = 0
    const typeSpeed = 45
    const timer = setInterval(() => {
      if (i < heroText.length) {
        setTypedText(heroText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowCursor(false), 800)
      }
    }, typeSpeed)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const memberTimer = setInterval(() => {
      setMemberCount((prev) => (prev < 33 ? prev + 1 : prev))
    }, 80)

    const projectTimer = setInterval(() => {
      setProjectCount((prev) => (prev < 3 ? prev + 1 : prev))
    }, 120)

    return () => {
      clearInterval(memberTimer)
      clearInterval(projectTimer)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isNavScrolled ? "backdrop-blur-md bg-black/80 py-2" : "bg-black/20 py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image src="/crhc-logo.png" alt="CRHC Logo" width={40} height={40} className="rounded-lg" />
              </div>
              <span className="text-2xl font-bold font-mono text-white">CRHC</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors font-mono">
                首頁
              </Link>
              <Link href="/members" className="text-gray-400 hover:text-white transition-colors font-mono">
                幹部介紹
              </Link>
              <Link href="/activities" className="text-gray-400 hover:text-white transition-colors font-mono">
                活動資訊
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 font-mono text-white">
                CRHC
                <br />
                <span className="text-gray-300">電研社</span>
              </h1>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed font-sans">高雄市新莊高中電腦研究社</p>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed font-sans">
                我們致力於探索資安的技術，培養程式設計能力，提升技術水平。加入我們，一起開創未來
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-white text-black hover:bg-gray-200 font-mono">
                  <Link href="/members">認識幹部</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-400 text-gray-400 hover:bg-gray-800 hover:text-white font-mono bg-transparent"
                >
                  <Link href="/activities">查看活動</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 relative">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">we.js</span>
                </div>
                <pre className="text-white text-sm font-mono leading-relaxed overflow-hidden min-h-[120px]">
                  <code>{typedText}</code>
                  {showCursor && <span className="text-white">█</span>}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold font-mono mb-4 text-white">{memberCount}</div>
                <div className="text-gray-400 font-sans">社員</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold font-mono mb-4 text-white">{projectCount}</div>
                <div className="text-gray-400 font-sans">競賽舉辦</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold font-mono mb-4 text-white">3</div>
                <div className="text-gray-400 font-sans">年度活動</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 font-mono text-white">關於 CRHC</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 font-mono text-white">我們的使命</h3>
                <p className="text-gray-400 leading-relaxed font-sans">
                  培養學生對資訊科技資安技術的興趣，提供練習資源，以提升技術能力。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 font-mono text-white">學習領域</h3>
                <p className="text-gray-400 leading-relaxed font-sans">
                  資安開發、遊戲設計、discord bot設計等多元化的資訊領域。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/crhc-logo.png" alt="CRHC Logo" width={40} height={40} className="rounded-lg" />
            </div>
            <span className="text-2xl font-bold font-mono text-white">CRHC</span>
          </div>
          <p className="text-gray-500 font-mono">© 2025 高雄市新莊高中電腦研究社. All rights reserved.</p>
          <p className="text-gray-600 text-sm mt-2 font-mono">Computer Research Hilsin Chuang</p>
        </div>
      </footer>
    </div>
  )
}
