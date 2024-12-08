'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SendHorizontal, Plus } from 'lucide-react'

export default function SupportChat() {
  return (
    <Card className="w-full max-w-[380px] bg-zinc-950 text-zinc-100">
      <CardHeader className="border-b border-zinc-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Aryton Senna" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">Aryton Senna</div>
              <div className="text-sm text-zinc-400">ArytonSenna@gmail.com</div>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-zinc-100" aria-label="Add new chat">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4 h-[300px] overflow-y-auto">
        <div className="bg-zinc-900 rounded-lg p-3 max-w-[280px]">
          Olá, como posso ajudar você hoje?
        </div>
        <div className="flex justify-end">
          <div className="bg-green-700 rounded-lg p-3 max-w-[280px]">
            Boa tarde, estou com problemas para realizar o pagamento da fatura.
          </div>
        </div>
        <div className="bg-zinc-900 rounded-lg p-3 max-w-[280px]">
          Poderia me informar o número do seu CPF?
        </div>
        <div className="flex justify-end">
          <div className="bg-green-700 rounded-lg p-3 max-w-[280px]">
            123.456.789-00
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-zinc-800 p-4">
        <form className="flex gap-2 w-full">
          <Input
            className="flex-grow bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-400"
            placeholder="Escreva uma mensagem..."
            aria-label="Message input"
          />
          <Button type="submit" size="icon" className="bg-green-700 hover:bg-green-600" aria-label="Send message">
            <SendHorizontal className="h-5 w-5" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

