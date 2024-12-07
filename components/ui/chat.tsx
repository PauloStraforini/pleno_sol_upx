import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SendHorizontal, Plus } from 'lucide-react'

export default function Chat() {
  return (
    <Card className="w-[400px] bg-zinc-950">
      <div className="p-4 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-zinc-100">Ayrton Senna <span className="text-green-600 hover:text-green-800">Suporte</span></div>
              <div className="text-sm text-zinc-400">ayrtonsenna@gmail.com</div>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-zinc-100">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="bg-zinc-900 text-zinc-100 rounded-lg p-3 max-w-[280px]">
          Olá, como posso te ajudar?
        </div>
        <div className="flex justify-end">
          <div className="bg-green-700 text-white rounded-lg p-3 max-w-[280px]">
            Boa tarde! Estou com problemas para realizar o pagamento da fatura.
          </div>
        </div>
        <div className="bg-zinc-900 text-zinc-100 rounded-lg p-3 max-w-[280px]">
          Qual a mensagem de erro que você está recebendo?
        </div>
        <div className="flex justify-end">
          <div className="bg-green-700 text-white rounded-lg p-3 max-w-[280px]">
            Falha no processamento do pagamento.  ??
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-zinc-800">
        <form className="flex gap-2">
          <Input
            className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-400"
            placeholder="Digite sua mensagem..."
          />
          <Button size="icon" className="bg-green-600 hover:bg-green-700">
            <SendHorizontal className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </Card>
  )
}

