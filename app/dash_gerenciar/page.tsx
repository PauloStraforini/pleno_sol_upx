import { Component,  } from "@/components/charts/bar_charts_mult"
import { Big_Chart } from "@/components/charts/big_chart"
import { Pie_Charts } from "@/components/charts/line_charts"

import { AppSidebar } from "@/components/ui/AppSidebar"


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"




import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import SupportChat from "@/components/ui/support-chat"
import PaymentUser from "@/components/ui/table-use"




export default function Dashboard() {
  return (
    
    
    <SidebarProvider>
        <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Geral</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-3 flex-col gap-3 p-3">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <section >
              <SupportChat />
            </section>
            
            <section>
              <PaymentUser/>
            </section>
            
            <section>
              
            </section>

          </div>
          
          <section>
            <Big_Chart/>
          </section>

        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
