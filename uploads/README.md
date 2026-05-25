# Seminário 8 — Entrega completa

**Administração Pública orientada por dados · Governo aberto · LGPD · processo digital · decisão algorítmica**
Ana Vitória Vanzin & Vinícius Oliveira · PPGD/UFSC · 2026
Consolidado em 2026-05-24.

Esta pasta reúne tudo o que foi produzido na sessão: o deck, o protótipo, o roteiro de falas e os planos.

---

## 📊 `deck/` — a apresentação
| Arquivo | O que é |
|---|---|
| `Seminario8-deck-FINAL.pptx` | **O deck para apresentar.** 33 slides, 100% claude-design (imagens full-bleed 1920×1080). Estruturado em um **Arco de Tensão** (Promessa → Choque de Realidade → Conflito → Resolução). |
| `Seminario8-deck-revisao.pdf` | Os 33 slides em PDF, para revisar página a página. |
| `Seminario8-deck-hibrido-editavel.pptx` | Versão alternativa: expositivos nativos/editáveis no PowerPoint (backup). |
| `fontes/` | Código-fonte do deck: HTML dos slides (`imgslides.html`, `expo.html`, `sample.html`), scripts de montagem (`build_final.py`, `build_deck.py`) e os 33 PNGs em `deck-assets/`. Inclui visualizações customizadas: `regulador-regulado-flow.html`, `black-box-inss.html` e `transparency-gap.html`. |

**Estrutura do deck (33 slides):** capa → pergunta orientadora → **Promessa** (Artigos I-II: Salgado&Saito, Cristóvam&Hahn) → **Choque de Realidade** (Artigos III-IV: Sarlet&Molinaro, Tavares et al.) → **Conflito / Ato autoral** (tese Regulador⇄Regulado, caso INSS, SyRI, tabela BR 2025-26) → **Resolução / Proposta** (camada propedêutica, protótipo GovLens) → fecho.

## 🛠️ `prototipo/` — o protótipo
| Arquivo | O que é |
|---|---|
| `PLANO-PROTOTIPO-FINAL.md` | Plano do protótipo final (GovLens + Conselho de Contestação Algorítmica), fluxo de telas, módulos núcleo vs aberto, ancoragem no Seminário 8. |
| `prototipo-demo-conselho-canned.html` | Demo offline (à prova de falha) do Conselho com o caso INSS — abre no navegador, sem internet. |

**App ao vivo (não copiado aqui — é um repositório git):**
`~/Documents/projetos/research/hub/iconocracy-corpus/vault/2026-Q2-Seminario-AD/algoritmo-em-disputa/`
Commit `5b28199` — caso INSS, UI em PT acentuado, modelos pagos do OpenRouter. Rodar: `./start.sh` → `localhost:5173`.

## 🎤 `apresentacao/` — falas
| Arquivo | O que é |
|---|---|
| `ROTEIRO-FALAS-ANA.md` | Roteiro das batidas costuradas da Ana (intercaladas com o Vinícius), com o caso de cada artigo, a contribuição propedêutica, a deixa da demo e a caixa de munição para o debate. |

## 🗂️ `planos/` — planejamento
| Arquivo | O que é |
|---|---|
| `PLANO-SLIDES-V2.md` | Plano de design dos slides (sistema visual Dossiê/Painel, mapa slide-a-slide, método). |
| `PLANO-prototipo-final-(plan-mode).md` | Plano do protótipo (gerado em plan mode). |

## 📚 `materiais-base/` — referência e bastidores
Material anterior que embasou tudo:
| Arquivo | O que é |
|---|---|
| `SEMINARIO-FINAL-CONSOLIDADO.md` | Documento canônico anterior (AP 4.0): tese, marco teórico, diagnóstico, bibliografia. |
| `Seminário-Index.md` | Índice do vault original do seminário. |
| `03-Summaries_Proposta-Seminário-AP4-0.md` | Proposta extensa do GovLens/DueProcess.AI (arquitetura, 6 telas, roadmap). |
| `ANALISE-ORIGINALIDADE.md` | Gap analysis: o que já existe no Brasil e o que o protótipo traz de novo. |
| `PROMPT-CLAUDE-DESIGN.md` | Prompt usado para gerar os slides HTML antigos. |
| `algoritmo-em-disputa_README.md` | README do app do Conselho. |
| `01-Materials_Model-Council-*.md` · `model-council-synthesis.pdf` | Análise multi-modelo (Claude/Gemini/GPT) que orientou o protótipo. |
| `01-Materials_apresentacao-civitas-algoritmo-em-disputa.md` | Apresentação original Civitas + Algoritmo em Disputa. |

## Versões anteriores (referência)
- `deck/versoes-anteriores/slides-seminario-adm-publica-4.0.html` — deck HTML antigo (AP 4.0).
- `deck/versoes-anteriores/slides-seminario8-v2.html` — primeira fatia do deck web (design H).
- `prototipo/dueprocess-dashboard.html` · `prototipo/prototipo-interativo.html` — protótipos canned anteriores (GovLens dashboard, navegador didático).

---

## Contribuição autoral (o "nosso ponto de vista")
- **Tese:** o Estado como **Regulador ⇄ Regulado** — "Do Poder-Dever ao Dever-Poder". Quem edita a regra é o que mais a descumpre contra o cidadão.
- **Caso-âncora:** INSS (aposentadoria rural negada automaticamente, sem contraditório, contra a IN 128/2022). Espelho internacional: SyRI (Haia, 2020).
- **Camada propedêutica (Ana):** literacia algorítmica (contestar pressupõe compreender) + notícia humana (decisão adversa a vulnerável comunicada por uma pessoa, não por máquina).
- **Mapeamento persona → artigo:** as 4 vozes do Conselho = as 4 leituras do seminário.
