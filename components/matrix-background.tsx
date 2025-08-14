"use client"

import { useEffect } from "react"

export default function MatrixBackground() {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+~{}|[]\\:;'<>,.?/"
    const matrixArray = matrix.split("")

    const fontSize = 12
    const columns = Math.max(1, Math.floor(canvas.width / fontSize)) // 確保columns至少為1

    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#ffffff"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    // Resize handler
    const handleResize = () => {
      resizeCanvas()
      const newColumns = Math.max(1, Math.floor(canvas.width / fontSize))

      // 只有當newColumns是有效數字時才調整數組
      if (newColumns > 0 && isFinite(newColumns)) {
        drops.length = newColumns
        for (let x = 0; x < newColumns; x++) {
          if (drops[x] === undefined) {
            drops[x] = 1
          }
        }
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas id="matrix-canvas" className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />
}
