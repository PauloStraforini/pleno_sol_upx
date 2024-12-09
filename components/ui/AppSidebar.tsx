import * as React from "react"

import { VersionSwitcher } from "@/components/ui/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "AREA DO USUÁRIO",
      url: "#",
      items: [
        {
          title: "Notificações",
          url: "#",
        },
        {
          title: "Gerenciar",
          url: "dash_gerenciar",
        },
      ],
    },
    {
      title: "CONTROLE ENERGÉTICO",
      url: "#",
      items: [ 
        {
          title: "Acumulados",
          url: "/dash_acumulados",
          
          
        },
        {
          title: "Utilizados",
          url: "/dash_util",
          isActive: true,
        },
        {
          title: "Gastos",
          url: "/dash_gastos",
        },
        
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
