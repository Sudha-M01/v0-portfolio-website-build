"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 20)

    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1400)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      style={{
        animation: progress >= 100 ? "fade-in 0.3s ease reverse forwards" : undefined,
      }}
    >
      <div className="mb-6 text-2xl font-bold text-foreground">
        {"<"}
        <span className="text-primary">SM</span>
        {" />"}
      </div>
      <div className="h-1 w-48 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #58a6ff 0%, #79c0ff 100%)",
            boxShadow: "0 0 10px rgba(88, 166, 255, 0.5)",
          }}
        />
      </div>
    </div>
  )
}
