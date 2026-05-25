# Seminário 8 — Do Poder-Dever ao Dever-Poder

**Administração Pública orientada por dados · Governo aberto · LGPD · processo digital · decisão algorítmica**

Ana Vitória Vanzin & Vinícius Oliveira · PPGD/UFSC · Maio 2026

---

Entrega acadêmica completa do Seminário VIII da disciplina Direito da Administração Pública (Prof. Cristóvam). A apresentação lê quatro artigos do IJDL como um único arco dramático, culminando na tese autoral do **Estado como Regulador ⇄ Regulado**: quem edita a regra é, com frequência, quem mais a descumpre contra o cidadão.

## O que está aqui

| Arquivo | Descrição |
|---|---|
| `index.html` | Índice/dossiê de entrega — ponto de entrada com todas as peças |
| `Seminario8.html` | **Deck principal** — 34 slides, navegação ← →, sistema editorial (papel + Garamond + bordô) |
| `Seminario8-print.html` | Versão para impressão (A4, print-friendly) |
| `Conselho.html` | Protótipo do Conselho de Contestação Algorítmica — 4 personas analisam decisões automatizadas |
| `Seminario8-animado.html` | Animação em 6 cenas (32s, loop) — resumo visual do arco completo |
| `Wireframes.html` | Bastidor: 3 direções visuais comparadas lado a lado |
| `deck-stage.js` | Engine de navegação do deck (← →, thumbnails, speaker notes, print) |
| `animations.jsx` | Engine de animação (Stage, Sprite, Easing, timeline) |
| `video-atoms.jsx` | Átomos visuais reutilizáveis (JanusHead, BlackBox, PhoneFrame, ColumnGfx) |
| `tweaks-panel.jsx` | Painel de tweaks reutilizável |
| `uploads/` | Materiais de referência: roteiro de falas, planos, análises, protótipos anteriores |
| `assets/` | Gravuras e ornamentos editoriais |
| `screenshots/` | Capturas de tela de referência |

## Estrutura do deck (34 slides)

Capa → Pergunta orientadora → Chave de leitura (Janus)

**Parte I — Promessa** (Art. I–II: Salgado & Saito, Cristóvam & Hahn)
→ ★ Nossas leituras I e II

**Parte II — Choque** (Art. III–IV: Sarlet & Molinaro, Tavares et al.)
→ ★ Nossas leituras III e IV

**Ato autoral** — Tese Regulador ⇄ Regulado, caso INSS, Black Box, SyRI, tabela

**Resolução** — Propedêutica (literacia + notícia humana), Protótipo GovLens, Demo, Fecho

## Tese central

> O Estado opera como **regulador ⇄ regulado**: quem edita a regra é, com frequência, quem mais a descumpre contra o cidadão. Do poder-dever ao dever-poder.

**Caso-âncora:** aposentadoria rural negada automaticamente pelo INSS sem contraditório prévio, em desacordo com a IN 128/2022.

**Espelho internacional:** SyRI (Haia, 2020) — sistema de detecção de fraude holandês declarado ilegal por violar privacidade e devido processo.

## Contribuição autoral

- **Camada propedêutica:** literacia algorítmica (contestar pressupõe compreender) + notícia humana (decisão adversa a vulnerável comunicada por pessoa, não por máquina)
- **Mapeamento persona → artigo:** as 4 vozes do Conselho = as 4 leituras do seminário

## Como usar

Abra `index.html` no navegador para o dossiê completo. A partir dele:

- Clique em **i** para o deck → navegue com ← →
- Clique em **iii** para o protótipo do Conselho
- Clique em **v** para a animação (▶ play, scrubber, loop)

## Stack técnica

HTML/CSS/JS vanilla + React (Babel standalone) para a animação. Fontes: EB Garamond, Spectral, JetBrains Mono via Google Fonts. Sem dependências de build ou servidor — abra os arquivos direto no navegador.
