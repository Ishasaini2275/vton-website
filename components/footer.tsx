import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded gradient-accent flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VirtualTryon AI</span>
            </div>
            <p className="text-slate-300">Advanced virtual try-on technology for the fashion industry.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/features" className="hover:text-cyan-300 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/try-on" className="hover:text-cyan-300 transition-colors">
                  Try On
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-300 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/guidelines" className="hover:text-cyan-300 transition-colors">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link href="/limitations" className="hover:text-cyan-300 transition-colors">
                  Limitations
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-cyan-300 transition-colors">
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-300 transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 VirtualTryon AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
