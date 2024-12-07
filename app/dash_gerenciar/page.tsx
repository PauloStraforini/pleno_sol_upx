
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
import { Command } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CardOfficial } from "@/components/ui/card-official"
import { CalendarOfficial } from "@/components/ui/calendar-official"
import Chat from "@/components/ui/chat"

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
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Gerenciamento</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-2 flex-col-reverse gap-2 p-2">
          {/* Alterei essa seção */}
          <div className="flex gap-4">
          <section className="flex-3 ">
              <Chat />
            </section>
            <section className="flex-2">
              <CardOfficial />
            </section>
            
            <section className="flex-1">
              <Pizza_Charts />
            </section>
          </div>
          <Big_Chart/>
          <section></section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
