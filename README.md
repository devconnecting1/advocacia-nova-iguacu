# Advocacia Nova Iguaçu — Site institucional

Site estático do escritório (Direito Civil + Trabalhista, Nova Iguaçu/RJ), publicado via **GitHub Pages** com build em **npm** rodando no **GitHub Actions**.

- Fonte: `src/` (`index.html`, `styles.css`, `script.js`, `favicon.svg`)
- Build: `npm run build` → gera `dist/` (cópia + carimbo de data)
- Deploy: `.github/workflows/pages.yml` (build no Ubuntu + `actions/deploy-pages`)

## Rodar local

```bash
npm run build
npx --yes serve dist -l 4173
# abrir http://localhost:4173
```

## Publicar no GitHub Pages

```bash
gh auth login
gh repo create advocacia-nova-iguacu --public --source=. --push
# Settings → Pages → Source: GitHub Actions (o workflow já faz o resto)
# URL: https://SEU-USUARIO.github.io/advocacia-nova-iguacu/
```

> Troque os placeholders antes do uso oficial: `(21) 99999-0000`, `contato@advocacianovaiguacu.com.br`, endereço e OAB/RJ.
