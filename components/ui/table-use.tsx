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
  status: "Success" | "Processing" | "Failed"
  email: string
  amount: number
}

const payments: Payment[] = [
  {
    id: "1",
    status: "Success",
    email: "ken99@yahoo.com",
    amount: 316.00,
  },
  {
    id: "2",
    status: "Success",
    email: "abe45@gmail.com",
    amount: 242.00,
  },
  {
    id: "3",
    status: "Processing",
    email: "monserrat44@gmail.com",
    amount: 837.00,
  },
  {
    id: "4",
    status: "Failed",
    email: "carmella@hotmail.com",
    amount: 721.00,
  },
]

export default function PaymentUser() {
  return (
    <Card className="w-full max-w-3xl bg-[#0A0C10] text-white border-[#1D2432]">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Payments</CardTitle>
        <p className="text-sm text-zinc-400">Manage your payments.</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Input
            placeholder="Filter emails..."
            className="max-w-xs bg-[#0A0C10] border-[#1D2432] text-white placeholder:text-zinc-500"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-[#1D2432] text-white hover:bg-[#1D2432]">
                Columns
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#0A0C10] border-[#1D2432]">
              <DropdownMenuItem className="text-white hover:bg-[#1D2432]">
                Status
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-[#1D2432]">
                Email
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-[#1D2432]">
                Amount
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="border rounded-md border-[#1D2432]">
          <Table>
            <TableHeader>
              <TableRow className="border-[#1D2432] hover:bg-transparent">
                <TableHead className="w-12">
                  <Checkbox className="border-zinc-500" />
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">Status</TableHead>
                <TableHead className="text-zinc-400 font-medium">
                  <div className="flex items-center gap-1">
                    Email
                    <ChevronUp className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">Amount</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id} className="border-[#1D2432] hover:bg-[#1D2432]/50">
                  <TableCell>
                    <Checkbox className="border-zinc-500" />
                  </TableCell>
                  <TableCell>
                    <span className={`inline-block ${
                      payment.status === "Success" ? "text-green-500" :
                      payment.status === "Processing" ? "text-blue-500" :
                      "text-red-500"
                    }`}>
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell>{payment.email}</TableCell>
                  <TableCell>${payment.amount.toFixed(2)}</TableCell>
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
          <div>0 of 4 row(s) selected.</div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="border-[#1D2432] text-white hover:bg-[#1D2432] disabled:opacity-50"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[#1D2432] text-white hover:bg-[#1D2432]"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

