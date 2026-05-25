# PLANO DE ENTREGA — Seminário 8 "Do Poder-Dever ao Dever-Poder"

**Ana Vitória Vanzin & Vinícius Oliveira · PPGD/UFSC · 25/05/2026**

---

## 1) Visão geral do material existente

| Arquivo | Status | Função |
|---|---|---|
| `index-improved.html` | ✅ Pronto | Landing page v2.0 (entrada principal) |
| `Seminario8.html` | ✅ Pronto | Deck principal (33–35 slides) |
| `Seminario8-print.html` | ✅ Pronto | Versão A4 para PDF |
| `Conselho.html` | ✅ Pronto | Protótipo offline (Plano B) |
| `Seminario8-Video.html` | ✅ Pronto | Vídeo de abertura (56s) |
| `Wireframes.html` | ✅ Pronto | Bastidores do design |
| `SCRIPT-COMPLETO.md` | ✅ Pronto | Falas completas (Ana + Vinícius) |
| `MINHA-FALA.md` | ✅ Pronto | Roteiro pessoal da Ana |
| `GUIA-VINICIUS.md` | ✅ Pronto | Guia rápido do Vinícius |

---

## 2) Checklist técnico pré-apresentação (Ato 0)

**No dia — antes de entrar na sala:**

1. Abrir `Seminario8.html` no navegador e testar navegação (← →, Espaço, Home).
2. Verificar fontes (Geist/EB Garamond; fallback Georgia).
3. Abrir `Conselho.html` em aba separada como Plano B (offline).
4. Plano A (preferencial — demo ao vivo): entrar em `algoritmo-em-disputa`, rodar `./start.sh`, acessar `localhost:5173`, clicar em "Carregar caso INSS (demo)" para pré-aquecer.
5. Decidir entre Plano A ou Plano B antes de começar.
6. Celular no silencioso · garrafa d'água · relógio visível.

---

## 3) Estrutura dramática da apresentação (~50 min total)

### Ato 0 — Abertura técnica (pré-início)

Checklist técnico acima.

### Ato 1 — Abertura dramática (~2 min) · Slides 01–03

- **Vinícius (slides 01–02):** apresenta os 4 artigos do IJDL como um único arco dramático; pergunta orientadora.
- **Ana (slide 03):** chave de leitura — Estado como Regulador ⇄ Regulado; tese central "do poder-dever ao dever-poder".

### Ato 2 — Parte I: Promessa (~10 min) · Slides 04–15

- **Vinícius (slides 04–08):** Salgado & Saito — privacidade multifuncional, 3 funções, 4 gerações, ADI 6.387.
- **Ana (slide 09):** leitura crítica I — Estado-regulado vs. cidadão; ADI 6.387; persona Cidadão.
- **Vinícius (slides 10–13):** Cristóvam & Hahn — Moore, Dunleavy, OCDE, INDA, 3 municípios.
- **Ana (slide 14):** leitura crítica II — opacidade seletiva, LAI art. 23, persona Administrador.
- **Vinícius (slide 15):** síntese da Parte I.

### Ato 3 — Parte II: Choque (~10 min) · Slides 16–29

- **Vinícius (slides 16–19):** Sarlet & Molinaro — 5 campos big data, LGPD pré-big data, soberania.
- **Ana (slide 20):** leitura crítica III — 251M CPFs, SC/SUS, minimização letra morta.
- **Vinícius (slides 21–24):** Tavares et al. — IA ≠ algoritmo, 3 tipologias, explicabilidade, contraditório prévio.
- **Ana (slides 24–27):** leitura crítica IV — INSS IN 128/2022, Black Box, SyRI (Haia 2020).
- **Slides 28–29:** tabela comparativa.

### Ato 4 — Resolução (~3 min) · Slides 30–34

- **Ana (slide 30):** propedêutica autoral — literacia algorítmica + notícia humana.
- **Ana (slides 31–33):** demo do Conselho de Contestação (~3–4 min).
- **Ana + Vinícius (slide 33/34):** fecho — decisão compreendida, explicada e contestada.

### Debate (~10 min)

Pergunta de abertura:

> A Administração Pública digital está decidindo **melhor** — ou apenas decidindo **mais rápido**, com menos chance de compreensão, contestação e participação?

---

## 4) Script da Demo — Conselho de Contestação (Slides 31–33)

1. **Contexto (30s):** "Imaginem a trabalhadora rural com aposentadoria negada automaticamente..."
2. **Fase 1 — Pareceres:** mostrar os 4 cards de persona (Defensoria · Cientista · Administrador · Cidadão).
3. **Fase 2 — Avaliações cruzadas:** mostrar ranking de concordância.
4. **Fase 3 — Parecer final:** relator sintetiza com fundamentação.
5. **Conclusão (15s):** "O sistema não decide pela pessoa — ele devolve a ela o contraditório que o Estado suprimiu."

| Persona | Artigo representado |
|---|---|
| Defensoria Pública | Tavares et al. — contraditório prévio |
| Cientista de Dados | Transversal — explicabilidade, viés |
| Administrador Público | Cristóvam & Hahn — governança |
| Cidadão | Salgado & Saito / Sarlet & Molinaro — autodeterminação |

---

## 5) Contingências

| Problema | Solução |
|---|---|
| Wi-Fi cair durante demo | Cortar para `Conselho.html` (aba já aberta) → "INSS — Aposentadoria Rural Negada" |
| Fontes não carregarem | Deck cai para Georgia — ainda apresentável |
| Plano A travar | Plano B: `Conselho.html` offline, fluxo idêntico |
| Pergunta difícil | Munição: Robodebt (Austrália), TJ/MA (969 sentenças IA), SyRI (Holanda 2020) |

---

## 6) Divisão de responsabilidades

- **Vinícius → dogmática:** expõe cada artigo, conceitos, dados quantitativos e sínteses.
- **Ana → tensão + caso:** leituras críticas, tese Regulador ⇄ Regulado, contribuição autoral (literacia + notícia humana), condução da demo.

---

## 7) Acesso público

URL única para os colegas:

**https://anavanzin.com/seminario8-dever-poder/**

O Service Worker cacheia fontes e assets na primeira visita para funcionamento offline nas visitas seguintes.
