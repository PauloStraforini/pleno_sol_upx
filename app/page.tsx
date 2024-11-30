import { Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import painel01 from "@/components/img/painel01.jpg";
import painel02 from "@/components/img/painel02.jpg";
import painel03 from "@/components/img/painel03.jpg";
import sun2 from "@/components/img/sun2.png";
import Link from "next/link";


export default function FirsPage() {

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold tracking-tight">Pleno Sol</h1>
          <a
            href="tel:866-330-3260"
            className="flex items-center gap-2 text-white hover:text-zinc-500"
          >
            <Phone className="h-4 w-4" />
            Ligue: (15) 998327410
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold leading-tight">
                Voce está pronto
                <br />
                Para
                <br />
                O futuro?
              </h2>
              <p className="mt-4 text-lg">
                Monitore, maximize eficiência e receba alertas inteligentes.
                Simples, eficiente e sustentável. 🌞
              </p>

              <Link href="/sing">
                
                  <Button className="mt-8 bg-green-700 text-white hover:bg-green-600">
                    Venha com a gente
                  </Button>
                
              </Link>
  
              
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-center lg:justify-end w-full">
                <Image
                  src={sun2}
                  alt="Imagem de um cachorro"
                  width={500}
                  height={900}
                  className="transform -translate-y-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-700 py-12 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold">20M</div>
            <div className="mt-2">Aparelhos Instalados!</div>
          </div>
          <div>
            <div className="text-4xl font-bold">8 Estados</div>
            <div className="mt-2">Presente nos Estados Brasileiros </div>
          </div>
          <div>
            <div className="text-4xl font-bold">THE BEST !!! </div>
            <div className="mt-2">
              Melhor Compania de Energia Solar do{" "}
              <span className="font-semibold"> Brasil ! </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            SISTEMAS DE PAINÉIS SOLARES INSTALADOS POR ESPECIALISTAS
            <br />
            PARA EMPRESAS, FAZENDAS E RESIDÊNCIAS
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Instalações Residenciais de Energia Solar 🌞",
                image: painel01,
                description:
                  "Transforme sua casa com energia solar! Cuidamos do projeto, instalação e monitoramento, garantindo eficiência.",
              },
              {
                title: "Instalações Comerciais de Energia Solar 🌞",
                image: painel02,
                description:
                  "Impulsione sua empresa com energia solar! Soluções completas, desde o projeto até a instalação e monitoramento.",
              },
              {
                title: "Instalações de Energia Solar para Condomínios 🌞",
                image: painel03,
                description:
                  "Soluções solares completas para condomínios! Proporcionando economia e sustentabilidade para todos.",
              },
            ].map((service) => (
              <Card key={service.title}>
                <CardContent className="p-0 bg-green-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="mb-4 text-center text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-center text-white">
                      {service.description}
                    </p>
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-700 py-16 text-white">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {[
            {
              quote:
                "O PlenoSol transformou a forma como acompanho minha energia solar.",
              author: "Christian",
            },
            {
              quote:
                "Conseguimos monitorar todos os nossos sistemas de energia solar em tempo real.",
              author: "Paulo (CTO - Scania)",
            },
            {
              quote:
                "Usar o PlenoSol foi um divisor de águas para nossa empresa.",
              author: "Andrade",
            },
          ].map((testimonial) => (
            <div key={testimonial.author} className="text-center">
              <p className="mb-4">{testimonial.quote}</p>
              <p className="font-bold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">Voce está pronto para futuro?</h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Cuidamos do design, monitoramento, geração de relatórios, alertas de
            manutenção e otimização do desempenho do seu sistema solar.
          </p>

          <Link href="/sing">
            <Button className="mt-8 bg-green-700 text-white hover:bg-green-600">
              Venha com a gente
            </Button>
          </Link>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-4 text-center text-sm text-zinc-400">
        <p>Copyright © PlenoSol.com.</p>
      </footer>
    </div>
  );
}
