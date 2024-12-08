import { ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Payment {
  id: string
  status: "Sucesso" | "Processando" | "Erro"
  data: string
  valor: number
}

const payments: Payment[] = [

  {
    id: "4",
    status: "Erro",
    data: "14/12/2025",
    valor: 721.00,
  },

  {
    id: "3",
    status: "Processando",
    data: "03/09/2025",
    valor: 837.00,
  },

  {
    id: "1",
    status: "Sucesso",
    data: "03/07/2025",
    valor: 316.00,
  },
  
  {
    id: "2",
    status: "Sucesso",
    data: "03/05/2025",
    valor: 242.00,
  }
  
  
]

export default function PaymentUser() {
  return (
    <Card className="w-full max-w-6xl bg-[#0A0C10] text-white border-zinc-800">
      <CardHeader className="pb-10">
        <CardTitle className="text-xl font-semibold">Pagamentos</CardTitle>
        <p className="text-sm text-zinc-400">Controle das faturas</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-green-700 text-white ">
                Columns
                <ChevronDown className=" h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#0A0C10] border-zinc-800">
              <DropdownMenuItem className="text-white hover:bg-green-500">
                Status
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:border-zinc-800">
                Data
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:border-zinc-800">
                Valor
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="border rounded-md border-zinc-800">
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="w-12">
                  <Checkbox className="border-zinc-500" />
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">Status</TableHead>
                <TableHead className="text-zinc-400 font-medium">
                  <div className="flex items-center gap-1">
                    Data
                    <ChevronUp className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">Valor</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id} className="border-zinc-800 hover:border-zinc-800">
                  <TableCell>
                    <Checkbox className="border-zinc-500" />
                  </TableCell>
                  <TableCell>
                    <span className={`inline-block ${
                      payment.status === "Sucesso" ? "text-green-500" :
                      payment.status === "Processando" ? "text-blue-500" : "text-red-500"
                    }`}>
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell>{payment.data}</TableCell>
                  <TableCell>${payment.valor.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="hover:bg-[#1D2432]">
                      <MoreHorizontal className="h-4 w-4 text-zinc-400" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm text-zinc-400">
          
          <div className="flex gap-2">
          
            <Button
              variant="outline"
              size="sm"
              className="border-green-700 text-white hover:bg-zinc-700"
            >
              Pagar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

