import type { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import {
  ADDRESS,
  DEPOIMENTOS,
  EMAIL,
  FAQ,
  PHONE_LABEL,
  waLink,
} from "../../lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";

const selectClass =
  "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring";

function enviarWhats(e: FormEvent<HTMLFormElement>, montar: (d: FormData) => string) {
  e.preventDefault();
  const dados = new FormData(e.currentTarget);
  window.open(waLink(montar(dados)), "_blank", "noopener");
}

export function FaixaNumeros() {
  const itens = [
    ["Consulta inicial", "sem compromisso"],
    ["Honorários claros", "contrato por escrito"],
    ["Acompanhamento", "online do caso"],
  ];
  return (
    <section className="border-y bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3">
        {itens.map(([forte, resto]) => (
          <p key={forte} className="flex items-center gap-2 text-[15px]">
            <CheckCircle2 className="size-5 shrink-0 text-ouro-600" />
            <span>
              <strong className="text-tinta-900">{forte}</strong>{" "}
              <span className="text-muted-foreground">{resto}</span>
            </span>
          </p>
        ))}
      </div>
    </section>
  );
}

export function SobreSecao() {
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-ouro-600 uppercase">
            O escritório
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-tinta-900">
            Advocacia local, padrão de excelência.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ficamos em {ADDRESS}, a poucos minutos da estação de trem. Atendemos
            Nova Iguaçu, Mesquita, Belford Roxo, Duque de Caxias e Nilópolis —
            além de consultas online para todo o Brasil.
          </p>
          <ul className="mt-4 grid gap-2 text-[15px]">
            {[
              "Atendimento com hora marcada, sem fila",
              "Documentos 100% digitais, com recibo",
              "Sigilo absoluto (Estatuto da OAB e LGPD)",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="size-5 shrink-0 text-ouro-600" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <Card id="como-funciona" className="h-fit">
          <CardHeader>
            <CardTitle>Como funciona</CardTitle>
            <CardDescription>Claro do início ao fim.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm">
            {[
              ["1. Conversa", "Você conta o caso, ouvimos sem juridiquês."],
              ["2. Análise", "Cenários, custos e honorários por escrito."],
              ["3. Ação", "Acordo ou processo, com atualizações periódicas."],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="font-bold text-tinta-900">{t}</p>
                <p className="text-muted-foreground">{d}</p>
              </div>
            ))}
            <Separator />
            <p className="text-muted-foreground">
              Seg–Sex, 9h às 18h · Sábado, com agendamento
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function DepoimentosSecao() {
  return (
    <section id="depoimentos" className="bg-papel">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-xs font-bold tracking-[0.16em] text-ouro-600 uppercase">
          Clientes
        </p>
        <h2 className="mt-1 font-serif text-3xl font-semibold text-tinta-900">
          Quem confiou, recomenda.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <Card key={d.autor}>
              <CardContent className="pt-6">
                <p className="font-serif text-[1.05rem] leading-relaxed italic">
                  {d.texto}
                </p>
                <p className="mt-3 text-sm font-semibold text-muted-foreground">
                  — {d.autor}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Depoimentos ilustrativos para demonstração do layout.
        </p>
      </div>
    </section>
  );
}

export function FaqSecao() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-xs font-bold tracking-[0.16em] text-ouro-600 uppercase">
          Dúvidas frequentes
        </p>
        <h2 className="mt-1 font-serif text-3xl font-semibold text-tinta-900">
          Perguntas que ouvimos todo dia.
        </h2>
        <Card className="mt-6">
          <CardContent className="pt-2">
            <Accordion type="single" collapsible defaultValue="item-0">
              {FAQ.map((f, i) => (
                <AccordionItem key={f.pergunta} value={`item-${i}`}>
                  <AccordionTrigger>{f.pergunta}</AccordionTrigger>
                  <AccordionContent>{f.resposta}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function ContatoSecao() {
  return (
    <section id="contato" className="bg-papel">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-ouro-600 uppercase">
            Contato
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-tinta-900">
            Fale agora. Prazo perdido não volta.
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge>{PHONE_LABEL}</Badge>
            <Badge variant="secondary">{EMAIL}</Badge>
            <Badge variant="outline">{ADDRESS}</Badge>
          </div>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle>Enviar mensagem</CardTitle>
              <CardDescription>
                Abre o WhatsApp com o texto pronto — retornamos em horário
                comercial.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="grid gap-4"
                onSubmit={(e) =>
                  enviarWhats(
                    e,
                    (d) =>
                      `Olá! Sou ${d.get("nome")} (${d.get("contato")}). ${d.get("mensagem")}`
                  )
                }
              >
                <div className="grid gap-1.5">
                  <Label htmlFor="ct-nome">Nome</Label>
                  <Input id="ct-nome" name="nome" required placeholder="Seu nome" autoComplete="name" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ct-tipo">Tipo de caso</Label>
                  <select id="ct-tipo" name="tipo" className={selectClass} defaultValue="Trabalhista">
                    <option>Trabalhista</option>
                    <option>Civil</option>
                    <option>Outro / não sei</option>
                  </select>
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ct-msg">Mensagem</Label>
                  <Textarea id="ct-msg" name="mensagem" rows={4} required placeholder="Resumo do seu caso" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="ct-contato">E-mail ou telefone</Label>
                  <Input id="ct-contato" name="contato" required placeholder="Como retornamos?" />
                </div>
                <Button variant="gold" type="submit">
                  Enviar pelo WhatsApp
                  <ArrowUpRight />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="grid content-start gap-3">
          <div className="overflow-hidden rounded-xl border">
            <iframe
              title="Mapa — Centro de Nova Iguaçu/RJ"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Centro,+Nova+Igua%C3%A7u,+RJ&output=embed"
              className="h-[340px] w-full border-0"
            />
          </div>
          <Button variant="outline" asChild>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Centro+Nova+Igua%C3%A7u+RJ"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin />
              Abrir no Google Maps
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
