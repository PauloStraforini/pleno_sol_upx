import Link from "next/link";
import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



export default function singUp() {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="flex w-1/2 flex-col justify-between bg-green-600 p-12">
        <div className="flex flex-col items-center text-center text-white">
          <h1 className="mb-2 text-2xl font-bold">Pleno Sol</h1>
          <p className="text-sm text-white">Sistema de Controle Energético</p>
          <p className="mt-8 text-sm leading-relaxed text-white">
            <br />
            <span className="font-semibold">— CTO Paulo, Pleno Sol</span>
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex w-1/2 flex-col justify-between p-12">
        <div className="flex justify-end">
          <div className="text-sm text-slate-600">
            <Link href="/create-account" className="text-emerald-600 hover:underline">
              Solicitar usuário
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Login</h2>
            <p className="text-sm text-slate-600">Entre com ID e Senha</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ID">Conta ID</Label>
              <Input
                id="ID"
                type="text"
                placeholder="Digite seu ID"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-emerald-600 hover:underline"
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

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Lembrar-se
              </Label>
            </div>

            

            <Button className="h-12 w-full bg-green-800 text-white hover:bg-green-700">
              Entrar
            </Button>

            
          </form>
        </div>
      </div>
    </div>
  );
}
