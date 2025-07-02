"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Sparkles, Book, Code, Settings, FileText } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navigationData = {
  main: [
    {
      title: "Introduction",
      url: "/",
      icon: Book,
    },
    // {
    //   title: "Live Demo",
    //   url: "/demo",
    //   icon: Sparkles,
    // },
  ],
  api: [
    {
      title: "API Overview",
      url: "/api-overview",
      icon: Code,
    },
    {
      title: "API Endpoints",
      url: "/api-endpoints",
      icon: Settings,
    },
  ],
  guides: [
    {
      title: "API Parameters Guide",
      url: "/api-parameters",
      icon: FileText,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">VirtualTryon AI</span>
          </div>
          {/* <ThemeToggle /> */}
        </div>

        {/* <div className="px-4 py-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <SidebarInput
              placeholder="Search..."
              className="pl-10 bg-card border-border text-foreground placeholder-muted-foreground"
            />
          </div>
        </div> */}
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* API Section */}
        <SidebarGroup>
          <SidebarGroupLabel>VirtualTryon API</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.api.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Guides Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Guides</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.guides.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
