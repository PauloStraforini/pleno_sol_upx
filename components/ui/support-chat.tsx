import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SendHorizontal, Plus } from 'lucide-react'

export default function SupportChat() {
  return (
    <Card className="w-[380px] bg-zinc-950">
      <div className="p-4 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-zinc-100">Aryton Senna</div>
              <div className="text-sm text-zinc-400">ArytonSenna@gmail.com</div>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-zinc-100">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="bg-zinc-900 text-zinc-100 rounded-lg p-3 max-w-[280px]">
          Olá, como posso ajudar você hoje?
        </div>
        <div className="flex justify-end">
          <div className="bg-green-700 text-white rounded-lg p-3 max-w-[280px]">
            Boa tarde, estou com problemas para realizar o pagemento da fatura.
          </div>
        </div>
        <div className="bg-zinc-900 text-zinc-100 rounded-lg p-3 max-w-[280px]">
          Poderia me informar o número do seu CPF?
        </div>
        <div className="flex justify-end">
          <div className="bg-green-700 text-white rounded-lg p-3 max-w-[280px]">
            123.456.789-00
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-zinc-800">
        <form className="flex gap-2">
          <Input
            className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-400"
            placeholder="Escreva uma mensagem..."
          />
          <Button size="icon" className="bg-green-700 hover:bg-green-600">
            <SendHorizontal className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </Card>
  )
}

