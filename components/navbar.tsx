"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/try-on", label: "Try On" },
    { href: "/guidelines", label: "Guidelines" },
    { href: "/limitations", label: "Limitations" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <header className="border-b border-gray-700/30 bg-gray-900/30 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">VirtualTryon AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href ? "text-purple-400 font-medium" : "text-gray-400 hover:text-purple-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button className="gradient-purple text-white hover:opacity-90 border-0 shadow-md">Get Started Free</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700/30 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href ? "text-purple-400 font-medium" : "text-gray-400 hover:text-purple-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <ThemeToggle />
                <Button className="gradient-purple text-white hover:opacity-90 border-0 shadow-md">
                  Get Started Free
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
