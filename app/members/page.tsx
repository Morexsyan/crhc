"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const members = [
  {
    id: 1,
    name: "otamot",
    position: "社長",
    grade: "高二",
    introduction: "\\新莊電研社長//♪───Ｏ（≧∇≦）Ｏ────♪",
    skills: ["遊戲開發", "C++", "discord bot"],
    avatar:
      "https://cdn.discordapp.com/attachments/1285460889138499604/1402725919671713893/borong_8787_1043848980313948281.png?ex=689ed910&is=689d8790&hm=6d1c3c3b837d2e04c3d98e04213a8bf17cb984090006dfdae6bc2653a71a21a2&",
  },
  {
    id: 2,
    name: "Aiyu",
    position: "副社長",
    grade: "高二",
    introduction: "被高中數學折磨的高中牲,穩定交往中cc",
    skills: ["Python", "discord bot"],
    avatar: "https://cdn.discordapp.com/avatars/964873863894810655/b7139856c968377e50e2fa8134696362.png",
  },
  {
    id: 3,
    name: "Syuan",
    position: "教學",
    grade: "高二",
    introduction: "オレは進み続ける。敵を駆逐するまで>>Myself : https://syansyan.vercel.app/",
    skills: ["python", "MySQL", "ai", "c++", "組合語言", "pwn", "web", "a little java"],
    avatar: "https://cdn.discordapp.com/avatars/1142777874760351785/df37e41981636e509d0fb732f7aac3b9.png",
  },
  {
    id: 4,
    name: "笙雪 金魚",
    position: "美宣",
    grade: "高二",
    introduction: "精神狀態良好，「高山青茶無糖去冰謝謝」其實還是喜歡全糖珍奶加布丁蜂蜜冰淇淋",
    skills: ["畫畫大神"],
    avatar:
      "https://cdn.discordapp.com/attachments/1312765311715381308/1402697999213138090/Screenshot_2025-08-07-00-59-55-499-edit_jp.naver.line.android.jpg?ex=689f67cf&is=689e164f&hm=06e511372287f83741be39b9f89d62a159ebbd21b60154e4bd3da7aaab2f7197&",
  },
  {
    id: 5,
    name: "VC.",
    position: "總務",
    grade: "高二",
    introduction: "數學完蛋了",
    skills: ["python", "discord bot"],
    avatar: "https://cdn.discordapp.com/avatars/1170595953884024835/93add5bcc58707d7d5a9362f2279c237.png",
  },
  {
    id: 6,
    name: "chiu",
    position: "文書",
    grade: "高二",
    introduction: "",
    skills: ["python", "discord bot"],
    avatar:
      "https://cdn.discordapp.com/avatars/1281182118411763723/6758dddd8aaba423b98a3668c827a6aa.png?size=2048&quality=lossless",
  },
]

export default function MembersPage() {
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
              <Link href="/members" className="nav-link active">
                幹部介紹
              </Link>
              <Link href="/activities" className="nav-link">
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
            <span className="text-white" data-text="幹部">
              幹部
            </span>
            介紹
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans reveal reveal-delay-1">
            認識我們優秀(奇怪)的幹部們
          </p>
        </div>
      </section>

      {/* Members Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Card key={member.id} className={`hacker-card reveal reveal-delay-${(index % 3) + 1}`}>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-mono text-white">{member.name}</h3>
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold font-mono">
                        {member.position}
                      </span>
                      <span className="text-gray-400 text-sm font-mono">{member.grade}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">{member.introduction}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm font-mono">專長技能</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-xs font-mono border border-gray-700 hover:border-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
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
          <h2 className="text-4xl font-bold mb-8 font-mono text-white">想加入我們嗎？</h2>
          <p className="text-xl text-gray-400 mb-10 font-sans">CRHC歡迎所有對資訊資安有興趣的同學加入我們的大家庭！</p>
          <Button className="cta-button primary">
            <Link href="/activities">查看最新活動</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/crhc-logo.png" alt="CRHC Logo" width={40} height={40} className="rounded-lg" />
            </div>
            <span className="text-2xl font-bold font-mono">CRHC</span>
          </div>
          <p className="text-gray-500 font-mono">© 2025 高雄市新莊高中電腦研究社. All rights reserved.</p>
          <p className="text-gray-600 text-sm mt-2 font-mono">Computer Research Hilsin Chuang</p>
        </div>
      </footer>
    </div>
  )
}
