import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SLIDES, waLink } from "../../lib/site";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function HeroPortal() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setAtual((i) => (i + 1) % SLIDES.length),
      7000
    );
    return () => window.clearInterval(id);
  }, []);

  const slide = SLIDES[atual];

  return (
    <section id="inicio" className="bg-tinta-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[1.45fr_0.9fr] lg:py-14">
        <div className="flex flex-col justify-center">
          <Badge variant="gold" className="w-fit">
            {slide.tag}
          </Badge>
          <h1 className="mt-4 font-serif text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-[2.9rem] lg:leading-[1.12]">
            {slide.titulo}
          </h1>
          <p className="mt-4 max-w-xl text-[1.05rem] text-white/75">
            {slide.desc}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="gold" size="lg" asChild>
              <a
                href={waLink("Olá! Preciso de ajuda jurídica.")}
                target="_blank"
                rel="noreferrer"
              >
                {slide.primaria}
                <ArrowRight />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/30 bg-transparent text-white hover:bg-white hover:text-tinta-900"
            >
              <a href={slide.secundariaHref}>{slide.secundaria}</a>
            </Button>
          </div>
          <div className="mt-7 flex items-center gap-2" role="tablist" aria-label="Destaques">
            {SLIDES.map((s, i) => (
              <button
                key={s.tag}
                role="tab"
                aria-selected={i === atual}
                aria-label={s.tag}
                onClick={() => setAtual(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === atual ? "w-8 bg-ouro-400" : "w-2 bg-white/30 hover:bg-white/60"
                )}
              />
            ))}
          </div>
        </div>
        <div className="grid content-center gap-4">
          <Card>
            <CardHeader>
              <Badge className="w-fit">Consulta inicial</Badge>
              <CardTitle className="mt-2">Conte seu caso em 1 minuto</CardTitle>
              <CardDescription>
                Retornamos em horário comercial. Sem compromisso, sem spam.
              </CardDescription>
            </CardHeader>
          </Card>
          <a
            href={waLink("Olá! Quero agendar uma consulta.")}
            target="_blank"
            rel="noreferrer"
            className="grafismo group rounded-xl bg-ouro-500 p-5 text-tinta-950 transition-colors hover:bg-ouro-400"
          >
            <p className="text-xs font-bold tracking-[0.14em] uppercase">
              Agendamento
            </p>
            <p className="mt-1 font-serif text-xl font-semibold">
              Presencial no Centro ou online
            </p>
            <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold">
              Chamar no WhatsApp
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
