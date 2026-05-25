# Seminário 8 — Do Poder-Dever ao Dever-Poder

**Administração Pública orientada por dados · Governo aberto · LGPD · processo digital · decisão algorítmica**

Ana Vitória Vanzin & Vinícius Oliveira · PPGD/UFSC · Maio 2026

---

## 🔗 Acessar

**https://anavanzin.com/seminario8-dever-poder/**

---

Apresentação interdisciplinar que lê quatro artigos do IJDL como um único arco dramático: o **Estado como Regulador ⇄ Regulado**. Quem edita a regra é, com frequência, quem mais a descumpre contra o cidadão.

---

## 🎨 Design System v2.0 (maio 2026)

### Nova direção visual

**Inspirado em:** Vercel, Stripe, Linear  
**Princípios aplicados:** Minimalismo técnico, tipografia compacta, "gallery emptiness" (espaço amplo entre elementos), shadow-as-border instead of CSS borders.

| Antes | Agora |
|-------|-------|
| EB Garamond + Spectral (serif editorial clássico) | Geist + Geist Mono (tipografia moderna, negativa tracking agressiva) |
| Paleta Pergaminho (tons quentes de papel envelhecido) | Achromatic precision (black #171717 / white #ffffff + workflow accents Blue/Pink/Red) |
| Borda sólida tradicional | Shadow-as-border: `rgba(0,0,0,0.08) 0px 0px 0px 1px` |
| Badges retangulares | Pill badges (radius 9999px) com tintas funcionais |
| Layout denso | Gallery emptiness (padding 80px–120px entre seções) |

### Fontes

- **Primary:** Geist (Google Fonts CDN: https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600)
- **Monospace:** Geist Mono (https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap)
- **Tracking negativo:** -2.4px à display size (48px), relaxando progressivamente até normal em body text

### Cores

| Função | Cor | Uso |
|--------|-----|-----|
| Black primary | `#171717` | Textos, headings |
| White canvas | `#ffffff` | Background, cards |
| Develop blue | `#0a72ef` | Workflow stage i, academic emphasis |
| Preview pink | `#de1d8d` | Workflow stage ii, peak moments |
| Ship red | `#ff5b4f` | Workflow stage iii, ship CTA |
| Gray scale | `#171717 → #ebebeb` | Hierarquia de texto e divisores |

### Componentes-chave

1. **Entry Cards**: Multi-layer shadows (border + subtle lift + ambient depth)
2. **Pill Tags**: Status indicators com background tinted (blue/pink/red)
3. **Shadow Border**: `box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08)` replaces traditional borders
4. **Focus Ring**: Accessibility via `2px solid hsla(212, 100%, 48%, 1)` on interactive elements
5. **Arc Grid**: 4-cell horizontal pipeline mostrando os 4 atos do deck

### Arquivos de design

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | **Entrada principal** (servida na raiz do deploy) — design Vercel-style v2.0, idêntica a `index-improved.html` |
| `index-improved.html` | Mesma landing v2.0 (mantida como cópia de trabalho; sincronizada com `index.html`) |
| `Índice.html` | Landing histórica v1 "Pergaminho" (EB Garamond) — não está mais ligada ao fluxo principal |
| `assets/` | SVGs ornamentais originais (escapular, espadas, etc.) mantidos para compatibilidade |

---

## 📦 Peças da entrega

| # | Arquivo | O que é | Como usar |
|---|---------|---------|-----------|
| i | `Seminario8.html` | **Deck principal** — 35 slides, sistema editorial | ← → para navegar |
| ii | `Seminario8-print.html` | Versão A4 para impressão | Ctrl+P → PDF |
| iii | `Conselho.html` | Protótipo do Conselho (offline) | Abrir no navegador |
| iv | `Wireframes.html` | Bastidor: 3 direções visuais | Para o debate |
| v | `Seminario8-Video.html` | **Vídeo de abertura** (56s, 6 cenas, 4 paletas) | ▶ autoplay |
| vi | `PLANO-ENTREGA.md` | Plano detalhado de execução e divisão de falas | Checklist de condução |
| vii | `colegas.html` | **Guia de Estudo / Kit Digital** — companion editorial para os colegas | Acesso principal dos colegas |
| viii | `conselho-architecture.html` | Bastidor: diagrama de arquitetura do app (Cloud Run + Gemini) | Para perguntas técnicas |
| — | `index.html` / `index-improved.html` | **Landing page v2.0** (idênticas; `index.html` é a raiz do deploy) | Acesso principal |
| — | `Índice.html` | Landing histórica v1 "Pergaminho" (link para `Seminario8-animado.html`) | Arquivo |

> ✅ **No slide 31:** clique "Iniciar a Deliberação" → o Conselho abre em tela cheia (overlay) com a mesma paleta acadêmica do deck. 3 fases: Pareceres → Avaliações Cruzadas → Parecer Final. Ao final, "Voltar à Tese" retorna ao slide final.

---

## 🗂️ Estrutura (35 slides)

**Slide 00** — Abertura com link para vídeo animado (56s)  
**Slides 01–03** — Capa, pergunta, chave de leitura (Janus)  
**Slides 04–15** — **Parte I: Promessa** (Art. I–II: Salgado & Saito, Cristóvam & Hahn)  
**Slides 16–24** — **Parte II: Choque** (Art. III–IV: Sarlet & Molinaro, Tavares et al.)  
**Slides 25–29** — **Conflito** (Tese, INSS, Black Box, SyRI, Tabela)  
**Slides 30–33** — **Resolução** (Propedêutica, Protótipo, Demo, Fecho)  
**Slide 34** — **Tese final** (4 colunas: explicável, contestável, inclusiva, controlável)

---

## 💡 Tese central

> O Estado opera como **regulador ⇄ regulado**: quem edita a regra é, com frequência, quem mais a descumpre contra o cidadão. Do poder-dever ao dever-poder.

**Caso-âncora:** Aposentadoria rural negada automaticamente pelo INSS sem contraditório prévio (IN 128/2022).

**Espelho internacional:** SyRI (Haia, 2020) — sistema holandês de detecção de fraude declarado ilegal.

---

## ✍️ Contribuição autoral

- **Literacia algorítmica:** não se contesta o que não se compreende
- **Notícia humana:** decisão adversa a vulnerável deve ser comunicada por pessoa, não por máquina
- **4 personas × 4 artigos:** Defensoria (Tavares), Cientista (Salgado), Admin (Cristóvam), Cidadão (Sarlet)

---

## 📴 Offline

O Service Worker faz cache **apenas das fontes Google e do `chart.googleapis.com`** na primeira visita (precache no `install` + cache-on-fetch). Os arquivos locais (HTML/JS/imagens) **não** são cacheados, então o deck **não** funciona totalmente offline — ele apenas evita re-baixar as fontes. Para offline real, seria preciso precachear os assets locais no `install`.

---

## ⚙️ Tech stack

**v2.0 (landing page):** HTML/CSS vanilla com design tokens CSS custom properties, Google Fonts (Geist + Geist Mono), gradientes lineares, grid layouts, flexbox responsive.

**v1.x (deck original):** HTML/CSS/JS vanilla. Navegação via `<deck-stage>` web component. Fontes: EB Garamond, Spectral, JetBrains Mono. Sem dependências de build ou servidor.

Ambas versões são **pure static files**, deployáveis em qualquer host estático (GitHub Pages, Cloudflare Pages, Netlify).

---

## 📁 Repositório

```bash
git clone https://github.com/anavvanzin/seminario8-dever-poder
cd seminario8-dever-poder
# Abra index-improved.html no navegador para a versão v2.0
# Ou abra index.html para a versão v1.x
```

---

## 🎯 Notas de design decision

### Por que mudar do sistema Pergaminho?

O sistema editorial (EB Garamond + tons de pergaminho) comunica bem a tradição jurídica, mas tem três limitações:

1. **Baixo contraste de acessibilidade WCAG AAA** em alguns estados hover (background gradientes suaves sobre paper color)
2. **Não escala bem para mobile** — serif display muito pequeno (<36px) torna-se ilegível
3. **Não transmite modernidade técnica** — o tema é sobre decisões algorítmicas, big data, IA; o visual precisa refletir isso

### Por que Vercel-style?

1. **Tipografia comprimida = densidade informacional** — negative letter-spacing permite mostrar mais informação sem parecer lotado
2. **Achromatic palette = foco no conteúdo** — cores funcionais apenas nos workflow stages, não decorativas
3. **Shadow-as-border = elegância técnica** — bordas sutis que existem na camada de sombra, não no box model
4. **Gallery emptiness = clareza mental** — padding generoso cria respiração entre seções, reduz carga cognitiva

### Trade-offs assumidos

| Decisão | Ganho | Perda |
|---------|-------|-------|
| Substituir serif por sans-serif | Modernidade, legibilidade mobile | Perde "tradição jurídica" implícita |
| Remover tons de pergaminho | Contraste AAA garantido, performance | Perde textura orgânica, warmth |
| Adicionar workflow colors | Sistema de navegação visual | Introduz cor onde antes era achromatic |
| Reduzir padding geral | Mais informações por viewport | Menos "espaço sagrado" editorial |

Recomenda-se manter ambas versões coexistindo: `index.html` (historical, tonal) e `index-improved.html` (modern, precise). Usuários podem escolher conforme contexto de uso.

---

*Última atualização: 25 de maio de 2026 — Ana Vanzin*
