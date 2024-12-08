'use client'

import { BellRing, Check } from 'lucide-react'
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
    title: "Próxima semana de muita chuva!",
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
    <Card className={cn("w-full max-w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>Você tem 3 mensagens não lidas.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing className="h-5 w-5 text-primary" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Ative o sininho
            </p>
            <p className="text-sm text-muted-foreground">
              Para receber notificações.
            </p>
          </div>
          <Switch />
        </div>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="grid grid-cols-[25px_1fr] items-start gap-2"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
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
          <Check className="mr-2 h-4 w-4" /> Marcar todas como lidas
        </Button>
      </CardFooter>
    </Card>
  )
}

