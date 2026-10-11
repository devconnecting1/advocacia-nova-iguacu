import { useState } from "react";
import { ArrowUpRight, Megaphone, SearchX } from "lucide-react";
import {
  CHAMADAS,
  INFORMES,
  PAINEL,
  waLink,
  type Area,
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
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

type Filtro = "todas" | Area;

const ROTULOS: Record<Filtro, string> = {
  todas: "Todas",
  civil: "Civil",
  trabalhista: "Trabalhista",
};

export function PortalConteudo({
  query,
  onClearQuery,
}: {
  query: string;
  onClearQuery: () => void;
}) {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const termo = query.trim().toLowerCase();

  const chamadas = CHAMADAS.filter((c) => {
    const areaOk = filtro === "todas" || c.area === filtro;
    const buscaOk =
      termo === "" ||
      `${c.tag} ${c.titulo} ${c.desc}`.toLowerCase().includes(termo);
    return areaOk && buscaOk;
  });

  return (
    <section id="areas" className="bg-papel">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[290px_1fr]">
        {/* ——— Coluna lateral, como o menu da PUC-Rio ——— */}
        <aside className="grid content-start gap-5">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">O escritório</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue="sobre">
                <AccordionItem value="sobre">
                  <AccordionTrigger>Sobre nós</AccordionTrigger>
                  <AccordionContent>
                    Advocacia local no Centro de Nova Iguaçu, com atuação em
                    toda a Baixada e consultas online para o Brasil.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rotina">
                  <AccordionTrigger>Rotina de atendimento</AccordionTrigger>
                  <AccordionContent>
                    Hora marcada, documentos 100% digitais com recibo e
                    acompanhamento online do caso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="servicos">
                  <AccordionTrigger>Serviços</AccordionTrigger>
                  <AccordionContent>
                    Consultas, pareceres, contratos, acordos e ações judiciais
                    nas áreas civil e trabalhista.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card id="informes">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Megaphone className="size-5 text-ouro-600" />
                Informes
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {INFORMES.map((info) => (
                <div key={info.titulo}>
                  <p className="text-sm font-bold text-tinta-900">
                    {info.titulo}
                  </p>
                  <p className="text-sm text-muted-foreground">{info.desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-tinta-900 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">
                Painel do escritório
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {PAINEL.map((p) => (
                <div key={p.rotulo} className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold text-ouro-400">
                    {p.valor}
                  </span>
                  <span className="text-sm text-white/75">{p.rotulo}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>

        {/* ——— Chamadas, como os destaques da home da PUC ——— */}
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-ouro-600 uppercase">
            Chamadas
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-tinta-900">
            Destaques por área
          </h2>
          <p className="mt-1 text-muted-foreground">
            Especialização em dois focos — profundidade, não volume.
          </p>

          <Tabs
            value={filtro}
            onValueChange={(v) => setFiltro(v as Filtro)}
            className="mt-5"
          >
            <TabsList aria-label="Filtrar por área">
              {(Object.keys(ROTULOS) as Filtro[]).map((f) => (
                <TabsTrigger key={f} value={f}>
                  {ROTULOS[f]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {chamadas.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {chamadas.map((c) => (
                <Card key={c.titulo} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <Badge
                      variant={c.area === "civil" ? "secondary" : "default"}
                      className="w-fit"
                    >
                      {c.tag}
                    </Badge>
                    <CardTitle className="mt-2">{c.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <CardDescription className="flex-1">
                      {c.desc}
                    </CardDescription>
                    <a
                      href={waLink(`Quero ajuda com: ${c.titulo}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-tinta-800 hover:text-ouro-600"
                    >
                      Falar com especialista
                      <ArrowUpRight className="size-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="mt-5">
              <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
                <SearchX className="size-8 text-muted-foreground" />
                <p className="font-semibold">
                  Nada encontrado para “{query}” neste filtro.
                </p>
                <Button variant="outline" onClick={onClearQuery}>
                  Limpar busca
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
