# Giovanna Neves · Advocacia

Site institucional em **Next.js 15 (App Router) + React 19 + TypeScript**.
Sem bibliotecas de animação: tudo feito com CSS e hooks próprios (leve e rápido).

## Como rodar

Requer Node.js 18.18 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

Para produção:

```bash
npm run build
npm start
```

Publicar na Vercel: envie a pasta para um repositório no GitHub e importe em vercel.com/new (nenhuma configuração extra).

## O que editar primeiro

Abra `src/lib/site.ts` e preencha:

- `whatsapp`: número com DDI + DDD (ex.: `5511999999999`). **Todos os botões usam este número.**
- `oab`, `instagram`, `email`, `city`: aparecem no site só quando preenchidos.
- `url`: o domínio final (usado no SEO).
- Textos das áreas, passos e dúvidas frequentes (revise antes de publicar).

As fotos ficam em `public/images/` (`giovanna-1.jpg` no topo, `giovanna-2.jpg` em Sobre, `giovanna-3.jpg` no contato final). Para trocar, substitua o arquivo mantendo o nome.

## Estrutura

```
src/
  app/            layout, página, estilos globais (cores e tipografia no globals.css)
  components/     Header, Hero, Statement, Areas, Diagnostic, About, Process, Faq, FinalCta, Footer
                  + SplitText (letras animadas), Reveal (entrada ao rolar), ParallaxImage
  lib/site.ts     dados e textos do site
```

## Animações

- Título com letras surgindo (`SplitText`) e destaque em dourado itálico com `{chaves}`.
- Texto de abertura que "acende" palavra por palavra ao rolar (`Statement`).
- Entrada suave dos blocos (`Reveal`) e leve parallax nas fotos.
- Cartões com brilho que segue o cursor, FAQ com abertura suave.
- Respeita `prefers-reduced-motion` (quem desativa animações no sistema vê tudo estático).

## Observação sobre publicidade na advocacia

O conteúdo foi escrito em tom informativo, sem promessa de resultado, em linha com as regras de publicidade da OAB (Provimento 205/2021). Vale a Dra. Giovanna revisar os textos e, se desejar, incluir o número da OAB.
