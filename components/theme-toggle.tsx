"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Waves, Mountain, Sparkles } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"teal" | "earthy" | "purple">("purple")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "teal" | "earthy" | "purple" | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      // Default to purple theme and apply it
      setTheme("purple")
      applyTheme("purple")
    }
  }, [])

  const applyTheme = (newTheme: "teal" | "earthy" | "purple") => {
    const body = document.body

    // Remove all theme classes
    body.classList.remove(
      "theme-earthy",
      "theme-purple",
      "theme-teal",
      "gradient-bg",
      "gradient-bg-earthy",
      "gradient-bg-purple",
    )

    if (newTheme === "earthy") {
      body.classList.add("theme-earthy", "gradient-bg-earthy")
    } else if (newTheme === "purple") {
      body.classList.add("theme-purple", "gradient-bg-purple")
    } else {
      body.classList.add("theme-teal", "gradient-bg")
    }
  }

  const toggleTheme = () => {
    const themes: ("teal" | "earthy" | "purple")[] = ["purple", "teal", "earthy"]
    const currentIndex = themes.indexOf(theme)
    const newTheme = themes[(currentIndex + 1) % themes.length]

    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "purple":
        return <Sparkles className="w-4 h-4 mr-2" />
      case "teal":
        return <Waves className="w-4 h-4 mr-2" />
      case "earthy":
        return <Mountain className="w-4 h-4 mr-2" />
    }
  }

  const getCurrentThemeName = () => {
    switch (theme) {
      case "purple":
        return "Purple"
      case "teal":
        return "Teal"
      case "earthy":
        return "Earthy"
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="border-border bg-transparent hover:bg-muted/50 transition-all duration-300"
    >
      {getThemeIcon()}
      {getCurrentThemeName()}
    </Button>
  )
}
