# NEXGRAN — Site oficial (landing page)

Next.js (App Router) + TypeScript, CSS puro, sem bibliotecas de UI ou de animação.
Fontes Sora (títulos) e Manrope (texto), servidas localmente via `@fontsource`.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # versão de produção
```

## Onde editar cada coisa

| O que | Onde |
|---|---|
| **WhatsApp** (número) | `src/config/site.ts` → `WHATSAPP_NUMBER` (só dígitos, ex.: `5511912345678`) |
| **Mensagens do WhatsApp** por botão | `src/config/content.ts` → `whatsappMessages` |
| **Instagram** | `src/config/site.ts` → `site.instagram` |
| **Região de atendimento** | `src/config/site.ts` → `SERVICE_REGION` (entra no hero, rodapé, meta description e schema.org quando preenchida) |
| E-mail, CNPJ, endereço, cidade | `src/config/site.ts` → `site.email`, `site.legal` (só aparecem se preenchidos) |
| **Logo** | `src/config/images.ts` → `logo` (hoje há um símbolo N provisório em `src/components/Logo.tsx`) |
| **Imagens** | `src/config/images.ts` (coloque os arquivos em `public/images/`) |
| **Projetos / portfólio** | `src/config/projects.ts` (lista vazia = "portfólio em construção") |
| Textos, FAQ, processo | `src/config/content.ts` |
| Cores e tipografia | variáveis em `src/app/globals.css` (`:root`) |
| URL do site (SEO, sitemap, Open Graph) | `.env.local` → `NEXT_PUBLIC_SITE_URL` |

## Tracking (Analytics, GTM, Meta Pixel)

Copie `.env.example` para `.env.local` e preencha só o que for usar:

- `NEXT_PUBLIC_GTM_ID` → Google Tag Manager
- `NEXT_PUBLIC_GA4_ID` → GA4 direto (ignorado se houver GTM)
- `NEXT_PUBLIC_META_PIXEL_ID` → Meta Pixel

Os scripts ficam em `src/components/TrackingScripts.tsx`; os eventos em `src/lib/tracking.ts`:
`view_page`, `click_whatsapp`, `click_orcamento`, `form_start`, `form_submit`.
Para a Meta Conversions API, cada evento já gera um `event_id` para deduplicação com o Pixel.
Sem IDs, nada é carregado.

## Formulário

Por padrão o formulário abre o WhatsApp com uma mensagem estruturada (nome, cidade, ambiente, área, observações).
Para integrar com backend/CRM, defina `NEXT_PUBLIC_FORM_ENDPOINT`: o formulário passa a enviar um `POST`
(multipart, com campo de fotos) para esse endereço. Sem endpoint, o upload de fotos fica oculto, porque o link
`wa.me` não permite anexos; o formulário orienta o envio das fotos pelo WhatsApp.

## Estrutura

```
src/
  app/          layout (SEO, Open Graph), página, ícone, OG image, robots, sitemap, CSS global
  config/       site.ts, content.ts, images.ts, projects.ts  ← dados editáveis
  components/   Header, Logo, MediaFrame, QuoteForm, TrackedLinks, JsonLd, TrackingScripts...
  sections/     Hero, Positioning, Solutions, Applications, Differentials, Process,
                Portfolio, Quote, Faq, FinalCta, Footer
  lib/          whatsapp.ts, tracking.ts
public/images/  fotos e logo reais
```

## Imagens provisórias

Nenhuma foto de terceiros é usada. Enquanto `src` estiver `null`, o site mostra texturas minerais ilustrativas
geradas por código (identificadas com o selo "Textura ilustrativa"). Ao informar a foto real em
`config/images.ts`, a textura e o selo somem e o Next otimiza a imagem (WebP/AVIF, lazy loading).
Para o hero, use uma foto horizontal/vertical de alta resolução; as linhas de paginação animadas só aparecem
quando o hero usa a textura provisória.
