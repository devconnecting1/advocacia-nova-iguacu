# Advocacia Nova Iguaçu — Portal institucional

Site do escritório (Direito Civil + Trabalhista, Nova Iguaçu/RJ) com **layout de portal inspirado na PUC-Rio** — faixa de utilidades com busca, brasão centralizado, navegação em caixa alta, slideshow de destaques, coluna lateral (Sobre / Informes / Painel) + grade de chamadas — publicado via **GitHub Pages** com build em **npm** rodando no **GitHub Actions**.

## Stack

- **Vite + React 19 + TypeScript** (`npm run build` → `tsc -b && vite build` → `dist/`)
- **Tailwind CSS v4** (tema em `src/index.css`, fontes Literata + Rethink Sans como na PUC-Rio)
- **shadcn/ui (padrão New York)** em `src/components/ui` — usados onde fazem sentido:
  - `Button` (CTAs, variantes `gold`/`outline`), `Badge` (tags das chamadas), `Card` (áreas, informes, depoimentos, formulários)
  - `Accordion` (coluna “O escritório” + FAQ), `Tabs` (filtro Civil/Trabalhista das chamadas)
  - `Input`/`Textarea`/`Label` (busca + formulários → WhatsApp), `Separator`, `Sheet` (menu mobile)
- Base `/advocacia-nova-iguacu/` configurada em `vite.config.ts` para o Pages de projeto

## Rodar local

```bash
npm install
npm run dev      # http://localhost:5173/advocacia-nova-iguacu/
npm run build && npm run preview
```

## Deploy

Push na `main` aciona `.github/workflows/pages.yml` (Node 20 → `npm ci` → `npm run build` → `deploy-pages`).

- Site: https://devconnecting1.github.io/advocacia-nova-iguacu/
- Repo: https://github.com/devconnecting1/advocacia-nova-iguacu

> Troque os placeholders antes do uso oficial: `(21) 99999-0000`, `contato@advocacianovaiguacu.com.br`, endereço e OAB/RJ.
