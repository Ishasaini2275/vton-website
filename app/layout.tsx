import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VirtualTryon AI - API Documentation",
  description: "Virtual Try-On API Documentation and Integration Guide",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-purple gradient-bg-purple`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
              <SidebarTrigger className="-ml-1 md:hidden" />
            </header>
            <main className="flex-1">
              <Toaster/>
              {children}
              </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
