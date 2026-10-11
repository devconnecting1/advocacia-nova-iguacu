import { useState } from "react";
import { Cabecalho, FaixaUtilidades, Rodape, WhatsFloat } from "./components/site/chrome";
import { HeroPortal } from "./components/site/hero";
import { PortalConteudo } from "./components/site/portal";
import {
  ContatoSecao,
  DepoimentosSecao,
  FaixaNumeros,
  FaqSecao,
  SobreSecao,
} from "./components/site/sections";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-foreground"
      >
        Pular para o conteúdo
      </a>
      <FaixaUtilidades query={query} onQuery={setQuery} />
      <Cabecalho />
      <main id="conteudo">
        <HeroPortal />
        <PortalConteudo query={query} onClearQuery={() => setQuery("")} />
        <FaixaNumeros />
        <SobreSecao />
        <DepoimentosSecao />
        <FaqSecao />
        <ContatoSecao />
      </main>
      <Rodape />
      <WhatsFloat />
    </div>
  );
}
