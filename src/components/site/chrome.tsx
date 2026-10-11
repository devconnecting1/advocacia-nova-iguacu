import { Clock, Mail, MapPin, Menu, MessageCircle, Phone, Scale, Search } from "lucide-react";
import { ADDRESS_SHORT, EMAIL, NAV_PRIMARY, NAV_SECONDARY, PHONE_LABEL, waLink } from "../../lib/site";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const NAV_ALL = [...NAV_PRIMARY, ...NAV_SECONDARY];

export function FaixaUtilidades({
  query,
  onQuery,
}: {
  query: string;
  onQuery: (q: string) => void;
}) {
  return (
    <div className="bg-tinta-950 text-[13px] text-white/85">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-1 px-4 py-1.5">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5 text-ouro-400" />
          {ADDRESS_SHORT} — presencial e online
        </span>
        <span className="ml-auto hidden items-center gap-4 sm:flex">
          <a href="#informes" className="transition-colors hover:text-ouro-300">
            Informes
          </a>
          <a href="#contato" className="transition-colors hover:text-ouro-300">
            Atendimento
          </a>
          <Separator orientation="vertical" className="h-4 bg-white/25" />
          <label className="relative block">
            <span className="sr-only">Buscar no portal</span>
            <Search className="pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-white/60" />
            <Input
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Buscar"
              className="h-7 w-36 border-white/25 bg-white/10 pl-7 text-white placeholder:text-white/50 focus-visible:ring-ouro-400"
            />
          </label>
        </span>
      </div>
    </div>
  );
}

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <a href="#inicio" className="mx-auto flex flex-col items-center gap-1 text-center">
            <span className="grid size-11 place-items-center rounded-lg bg-tinta-900">
              <Scale className="size-6 text-ouro-400" />
            </span>
            <span className="font-serif text-xl leading-tight font-bold tracking-tight text-tinta-900">
              Advocacia Nova Iguaçu
            </span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Civil · Trabalhista — OAB/RJ
            </span>
          </a>
          <span className="absolute right-4 hidden gap-2 md:flex">
            <Button variant="gold" asChild>
              <a
                href={waLink("Olá! Quero agendar uma consulta com a Advocacia Nova Iguaçu.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
                Agendar consulta
              </a>
            </Button>
          </span>
          <span className="absolute right-4 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Abrir menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Advocacia Nova Iguaçu</SheetTitle>
                  <SheetDescription>Civil · Trabalhista — Nova Iguaçu/RJ</SheetDescription>
                </SheetHeader>
                <nav className="mt-2 grid gap-1" aria-label="Menu móvel">
                  {NAV_ALL.map((item) => (
                    <SheetTrigger asChild key={item.label + item.href}>
                      <a
                        href={item.href}
                        className="rounded-md px-3 py-2.5 text-[15px] font-semibold text-tinta-900 transition-colors hover:bg-muted"
                      >
                        {item.label}
                      </a>
                    </SheetTrigger>
                  ))}
                </nav>
                <div className="mt-auto grid gap-2">
                  <Separator />
                  <Button variant="gold" asChild>
                    <a
                      href={waLink("Olá! Quero agendar uma consulta.")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle />
                      Agendar consulta
                    </a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    {PHONE_LABEL} · {EMAIL}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </span>
        </div>
        <nav
          className="mt-3 hidden justify-center border-t pt-2.5 md:flex"
          aria-label="Navegação principal"
        >
          <ul className="flex items-center gap-7">
            {NAV_PRIMARY.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[13px] font-bold tracking-[0.08em] text-tinta-900 uppercase transition-colors hover:text-ouro-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="mx-7 h-5 w-px bg-border" aria-hidden="true" />
          <ul className="flex items-center gap-7">
            {NAV_SECONDARY.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[13px] font-bold tracking-[0.08em] text-tinta-900 uppercase transition-colors hover:text-ouro-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Rodape() {
  const ano = new Date().getFullYear();
  return (
    <footer className="bg-tinta-950 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-serif text-lg font-bold text-white">
            <Scale className="size-5 text-ouro-400" />
            Advocacia Nova Iguaçu
          </p>
          <p className="mt-3 max-w-xs text-sm">
            Direito Civil e Trabalhista na Baixada Fluminense. OAB/RJ 00.000 —
            dados de demonstração.
          </p>
        </div>
        <nav aria-label="O escritório">
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-ouro-400 uppercase">
            O escritório
          </p>
          <ul className="grid gap-2 text-sm">
            {[
              ["Sobre", "#sobre"],
              ["Como funciona", "#como-funciona"],
              ["Clientes", "#depoimentos"],
              ["Dúvidas", "#faq"],
            ].map(([label, href]) => (
              <li key={href + label}>
                <a href={href} className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Áreas">
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-ouro-400 uppercase">
            Áreas
          </p>
          <ul className="grid gap-2 text-sm">
            {[
              ["Direito Civil", "#areas"],
              ["Direito Trabalhista", "#areas"],
              ["Acordos", "#areas"],
              ["Consulta", "#contato"],
            ].map(([label, href]) => (
              <li key={href + label}>
                <a href={href} className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-ouro-400 uppercase">
            Atendimento
          </p>
          <ul className="grid gap-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-ouro-400" /> {PHONE_LABEL}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-ouro-400" /> {EMAIL}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-ouro-400" /> Seg–Sex, 9h às 18h
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className={cn("mx-auto max-w-6xl px-4 py-4 text-xs text-white/55")}>
          © {ano} Advocacia Nova Iguaçu. Este site não constitui promessa de
          resultado (Provimento OAB 205/2021).
        </p>
      </div>
    </footer>
  );
}

export function WhatsFloat() {
  return (
    <a
      href={waLink("Olá! Quero falar com um advogado.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid size-13 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
