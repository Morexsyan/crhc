"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const ongoingActivities = [
  {
    id: 1,
    title: "CRHCCTF",
    description: "新莊高中第一屆CTF大賽,邀請國內外選手訓練",
    date: "2025年8月16日 - 8月18日",
    time: "9:00-9:00",
    location: "online",
    status: "ongoing",
    participants: 200,
    maxParticipants: 200,
  },
]

const upcomingActivities = [
  {
    id: 2,
    title: "第一堂社團課",
    description: "介紹基本社團內容及課程介紹",
    date: "2025年9月11日",
    time: "10:00-12:00",
    location: "電腦教室",
    status: "upcoming",
    participants: 30,
    maxParticipants: 30,
  },
  {
    id: 3,
    title: "資安季中賽",
    description: "透過資安季中賽挑戰測試技術水平",
    date: "2025年寒假(待定)",
    time: "全天",
    location: "Online",
    status: "upcoming",
    participants: 30,
    maxParticipants: 30,
  },
]

export default function ActivitiesPage() {
  const [isNavScrolled, setIsNavScrolled] = useState(false)

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
          isNavScrolled ? "nav-blur py-2" : "bg-black/20 py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image src="/crhc-logo.png" alt="CRHC Logo" width={40} height={40} className="rounded-lg" />
              </div>
              <span className="text-2xl font-bold font-mono">CRHC</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="nav-link">
                首頁
              </Link>
              <Link href="/members" className="nav-link">
                幹部介紹
              </Link>
              <Link href="/activities" className="nav-link active">
                活動資訊
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative scan-lines">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 font-mono reveal">
            <span className="text-white" data-text="活動">
              活動
            </span>
            資訊
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans reveal reveal-delay-1">
            join our event!!!!!!
          </p>
        </div>
      </section>

      {/* Ongoing Activities */}
      {ongoingActivities.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono reveal">
              <span className="text-white">正在進行</span>的活動
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingActivities.map((activity, index) => (
                <Card key={activity.id} className={`hacker-card border-gray-600 reveal reveal-delay-${index + 1}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold font-mono">
                        進行中
                      </span>
                      <span className="text-gray-400 text-sm font-mono">
                        {activity.participants}/{activity.maxParticipants} 人
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-mono text-white">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-6 leading-relaxed font-sans">{activity.description}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-400 font-mono">
                        <span className="text-white mr-3">📅</span>
                        {activity.date}
                      </div>
                      <div className="flex items-center text-gray-400 font-mono">
                        <span className="text-white mr-3">⏰</span>
                        {activity.time}
                      </div>
                      <div className="flex items-center text-gray-400 font-mono">
                        <span className="text-white mr-3">📍</span>
                        {activity.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Activities */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-mono reveal">
            <span className="text-white">即將舉辦</span>的活動
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingActivities.map((activity, index) => (
              <Card key={activity.id} className={`hacker-card reveal reveal-delay-${(index % 3) + 1}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold font-mono">
                      即將開始
                    </span>
                    <span className="text-gray-400 text-sm font-mono">
                      {activity.participants}/{activity.maxParticipants} 人
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-mono text-white">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6 leading-relaxed font-sans">{activity.description}</p>
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center text-gray-400 font-mono">
                      <span className="text-white mr-3">📅</span>
                      {activity.date}
                    </div>
                    <div className="flex items-center text-gray-400 font-mono">
                      <span className="text-white mr-3">⏰</span>
                      {activity.time}
                    </div>
                    <div className="flex items-center text-gray-400 font-mono">
                      <span className="text-white mr-3">📍</span>
                      {activity.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center hacker-card p-12 reveal">
          <h2 className="text-4xl font-bold mb-8 font-mono text-white">有想法或建議嗎？</h2>
          <p className="text-xl text-gray-400 mb-10 font-sans">
            我們歡迎所有創新的想法和活動提案，一起讓CRHC變得更好！
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 relative">
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
