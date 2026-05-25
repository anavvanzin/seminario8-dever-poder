# Seminário 8 — Do Poder-Dever ao Dever-Poder

**Administração Pública orientada por dados · Governo aberto · LGPD · processo digital · decisão algorítmica**

Ana Vitória Vanzin & Vinícius Oliveira · PPGD/UFSC · Maio 2026

---

## 🔗 Acessar

**http://anavanzin.com/seminario8-dever-poder/**

---

Apresentação interdisciplinar que lê quatro artigos do IJDL como um único arco dramático: o **Estado como Regulador ⇄ Regulado**. Quem edita a regra é, com frequência, quem mais a descumpre contra o cidadão.

## Peças da entrega

| # | Arquivo | O que é | Como usar |
|---|---------|---------|-----------|
| i | `Seminario8.html` | **Deck principal** — 35 slides, sistema editorial | ← → para navegar |
| ii | `Seminario8-print.html` | Versão A4 para impressão | Ctrl+P → PDF |
| iii | `Conselho.html` | Protótipo do Conselho (offline) | Abrir no navegador |
| iv | `Wireframes.html` | Bastidor: 3 direções visuais | Para o debate |
| v | `Seminario8-Video.html` | **Vídeo de abertura** (56s, 6 cenas, 4 paletas) | ▶ autoplay |

> ✅ **No slide 31:** clique "Iniciar a Deliberação" → o Conselho abre em tela cheia (overlay) com a mesma paleta editorial do deck. 3 fases: Pareceres → Avaliações Cruzadas → Parecer Final. Ao final, "Voltar à Tese" retorna ao slide final.

## Estrutura (35 slides)

**Slide 00** — Abertura com link para vídeo animado (56s)
**Slides 01–03** — Capa, pergunta, chave de leitura (Janus)
**Slides 04–15** — **Parte I: Promessa** (Art. I–II: Salgado & Saito, Cristóvam & Hahn)
**Slides 16–24** — **Parte II: Choque** (Art. III–IV: Sarlet & Molinaro, Tavares et al.)
**Slides 25–29** — **Conflito** (Tese, INSS, Black Box, SyRI, Tabela)
**Slides 30–33** — **Resolução** (Propedêutica, Protótipo, Demo, Fecho)
**Slide 34** — **Tese final** (4 colunas: explicável, contestável, inclusiva, controlável)

## Tese central

> O Estado opera como **regulador ⇄ regulado**: quem edita a regra é, com frequência, quem mais a descumpre contra o cidadão. Do poder-dever ao dever-poder.

**Caso-âncora:** Aposentadoria rural negada automaticamente pelo INSS sem contraditório prévio (IN 128/2022).

**Espelho internacional:** SyRI (Haia, 2020) — sistema holandês de detecção de fraude declarado ilegal.

## Contribuição autoral

- **Literacia algorítmica:** não se contesta o que não se compreende
- **Notícia humana:** decisão adversa a vulnerável deve ser comunicada por pessoa, não por máquina
- **4 personas × 4 artigos:** Defensoria (Tavares), Cientista (Salgado), Admin (Cristóvam), Cidadão (Sarlet)

## Offline

O Service Worker cacheia fontes Google e assets na primeira visita. Depois de carregar uma vez, o deck funciona mesmo sem internet.

## Tech stack

HTML/CSS/JS vanilla. Navegação via `<deck-stage>` web component. Fontes: EB Garamond, Spectral, JetBrains Mono. Sem dependências de build ou servidor.

## Repositório

```bash
git clone https://github.com/anavvanzin/seminario8-dever-poder
cd seminario8-dever-poder
# Abra index.html no navegador
```
