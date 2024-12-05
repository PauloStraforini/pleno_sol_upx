import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Proxima semana de muita chuva!",
    description: "1 hora atrás",
  },
  {
    title: "Carga da bateria em 50%!",
    description: "10 minutos atrás",
  },
  {
    title: "Atualização de software disponível!",
    description: "2 dias atrás",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CardOfficial({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>Vôce tem 3 mensagens não lidas.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Ative o cininho
            </p>
            <p className="text-sm text-muted-foreground">
              Para receber notificações.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> marca todas como lidas
        </Button>
      </CardFooter>
    </Card>
  )
}
