import Link from "next/link";
import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      {/* Formulário de Login */}
      <div className="w-full max-w-md p-8 bg-black rounded-lg">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="text-sm text-slate-600">Entre com ID e Senha</p>
        </div>

        <form className="space-y-6">
          {/* Campo de ID */}
          <div className="space-y-2">
            <Label htmlFor="ID">Conta ID</Label>
            <Input
              id="ID"
              type="text"
              placeholder="Digite seu ID"
              className="h-12"
            />
          </div>

          {/* Campo de Senha */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-green-600 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className="h-12 pr-10"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-12 w-12 text-slate-400"
              >
                <Eye className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Checkbox Lembrar-se */}
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal">
              Lembrar-se
            </Label>
          </div>

          {/* Botão de Login */}
          <Link href="/dashboards">
            <Button className="h-12 w-full bg-green-600 text-white hover:bg-green-700">
              Entrar
            </Button>
          </Link>
        </form>

        {/* Link para solicitar acesso */}
        <div className="mt-4 text-center text-sm text-slate-600">
          <Link href="/create-account" className="text-green-600 hover:underline">
            SOLICITAR ACESSO
          </Link>
        </div>
      </div>
    </div>
  );
}
