
import { Big_Chart } from "@/components/charts/big_chart"
import { Pie_Charts } from "@/components/charts/line_charts"
import { Pizza_Charts } from "@/components/charts/pizza_chats"
import { AppSidebar } from "@/components/ui/AppSidebar"
import { Bar_ruby,} from "@/components/charts/bar_ruby"
import { Pie_ruby } from "@/components/charts/pie_ruby"


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
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <section >
              <Bar_ruby/>
            </section>
            
            <section>
              <Pizza_Charts/>
            </section>
            
            <section>
              <Pie_ruby/>
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
