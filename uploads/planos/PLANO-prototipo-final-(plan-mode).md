# Plano — Protótipo final do Seminário 8 + pacote de apresentação

## Context

Seminário 8 (PPGD/UFSC, **amanhã 2026-05-25**), co-apresentado por **Ana Vanzin e Vinícius Oliveira**, sobre *Administração Pública orientada por dados, governo aberto, LGPD, processo digital e decisão algorítmica*. O material do Vinícius já está pronto: **29 slides** expositivos dos 4 artigos do IJDL (Salgado&Saito; Cristóvam&Hahn; Sarlet&Molinaro; Tavares, Bitencourt&Cristóvam) + uma camada autoral no Notion (tese **Regulador⇄Regulado / "Do Poder-Dever ao Dever-Poder"**, caso **SyRI** e uma **tabela de casos brasileiros 2025-26**).

Falta o **protótipo** — e a Ana quer um **plano** para o protótipo final (que ela constrói depois), **além de** um pacote mínimo para amanhã: demo pronta + roteiro das falas dela. A pergunta que estrutura tudo: *dado o material do Vinícius, qual o melhor protótipo a apresentar?*

**Resposta (a espinha do plano):** o **Conselho de Contestação Algorítmica** dentro da casca **GovLens/DueProcess.AI** — porque **as 4 personas do Conselho mapeiam 1:1 nos 4 artigos que o Vinícius expôs**:

| Persona (app) | Artigo IJDL | Eixo |
|---|---|---|
| Defensoria Pública | Tavares, Bitencourt & Cristóvam | contraditório algorítmico (art. 5º LV) |
| Cientista de Dados | (transversal / explicabilidade) | XAI, viés, transparência |
| Administrador Público | Cristóvam & Hahn | governo aberto, Lei 14.129 |
| Cidadão / Direitos Digitais | Salgado & Saito + Sarlet & Molinaro | autodeterminação informativa, LGPD |

O **Relator** sintetiza — é a "síntese final" dos slides virando software. **Caso-âncora: INSS** (negativa automática de aposentadoria rural sem contraditório prévio — o caso central da tabela do Vinícius e o exemplo de Tavares et al.). **SyRI** (Haia, 2020) entra como precedente internacional/comparativo.

## Estado atual dos ativos (já existem)

- **App real** `vault/2026-Q2-Seminario-AD/algoritmo-em-disputa/` — FastAPI + React, fork do llm-council. Roda com `./start.sh` (backend :8001, frontend :5173); deps instaladas; `.env` com `OPENROUTER_API_KEY` válida. Personas em `backend/config.py:20-47`; fluxo de 3 fases em `backend/council.py:26-171`. **Sem casos pré-carregados** (texto livre; sample em `frontend/src/components/ChatInterface.jsx:57-59`).
- **Casca GovLens (mock canned, offline)** em `~/Documents/Seminario-AP4.0-Entregaveis/`:
  - `dueprocess-dashboard.html` — telas GovLens polidas (mapa de dados, painel de viés, ações LAI/LGPD/recurso/DPU).
  - `prototipo-demo-algoritmo-em-disputa.html` — Conselho simulado (4 personas/3 fases) com 3 casos canned (Bolsa Família, IPTU, Auxílio) — **à prova de falha, sem rede**.
  - `prototipo-interativo.html` — navegador didático (Civitas 4.0 → Algoritmo em Disputa com sliders → GovLens 5 passos → Tensão Democrática).
- **Conteúdo jurídico** já capturado: tese Regulador⇄Regulado, caso SyRI, tabela BR 2025-26 (INSS, Robodebt, Palantir, vazamento Gov.br, juiz TJ/MA, ADI 6.387), proposta GovLens com arquitetura em camadas + análise de originalidade (gap confirmado no Brasil).

## Abordagem recomendada

Três entregáveis, com prioridade clara: **(T0) o que amanhã precisa** vs **(T+1) o que a Ana constrói depois**. O "manter a ideia em aberto" mora no T+1.

### Entregável A — Demo pronta para amanhã (T0) · PRIORIDADE
Objetivo: uma demo do caso **INSS** que funcione sem susto em sala.
- **Plano A (impacto): app live.** Preparar um **caso INSS** como sample de um clique no app (injetar texto do caso em `frontend/src/components/ChatInterface.jsx` perto das linhas 57-59) e validar conectividade OpenRouter antes (`curl` no endpoint). Rodar as 3 fases ao vivo = momento-clímax.
- **Plano B (rede): fallback canned offline.** Adicionar um **4º caso "INSS — aposentadoria rural"** ao `prototipo-demo-algoritmo-em-disputa.html` (mesmo formato dos 3 casos existentes: contexto + parecer das 4 personas + ranking + síntese). Abre no navegador, instantâneo, sem rede.
- Mini cheat-sheet "como rodar" (1 parágrafo) para a Ana ter em mãos.

### Entregável B — Roteiro das falas costuradas da Ana (T0)
`ROTEIRO-FALAS-ANA.md` em `~/Documents/Seminario-AP4.0-Entregaveis/`. Para **cada um dos 4 blocos de artigo** (onde o Vinícius expõe a dogmática), uma **batida curta da Ana** que: (1) liga o artigo à tese Regulador⇄Regulado; (2) puxa o caso BR correspondente da tabela; (3) deixa o gancho para a demo. Mais a deixa de transição para o clímax (demo INSS) e o fecho. Formato enxuto, falável (~30-45s por batida), alternando com o Vinícius.

### Entregável C — Plano do protótipo final (T+1) · o documento principal
`PLANO-PROTOTIPO-FINAL.md` em `~/Documents/Seminario-AP4.0-Entregaveis/`. Conteúdo:
1. **Conceito e justificativa** — GovLens (casca cidadã) + Conselho (motor de análise); o mapeamento persona→artigo como núcleo do argumento; âncora INSS, precedente SyRI.
2. **Fluxo unificado (6 telas)** — Consulta/Upload → Motivação ou caixa-preta? → Mapa de dados → **Conselho de Contestação (motor: o app)** → Estratégia jurídica (minutas LAI/LGPD art.20/recurso) → Tensão democrática (perfil baixa conectividade).
3. **Arquitetura reaproveitando o que existe** — motor = app `algoritmo-em-disputa` (personas `config.py`, fluxo `council.py`); UI das telas 1-3-5-6 = referência `dueprocess-dashboard.html`; integrar via endpoint `/api/cases` + chamada ao council a partir da tela 4.
4. **Módulos: Núcleo MVP vs Aberto/aspiracional.**
   - *Núcleo demonstrável:* telas 1-2-4-5 com o Conselho rodando; caso INSS.
   - *Aberto (a Ana decide depois):* blockchain só p/ hash de integridade, USSD/SMS p/ inclusão, integração Gov.br/TCU, differential privacy, painel de viés demográfico ao vivo. Entram como "arquitetura de referência", não como build obrigatório.
5. **Ancoragem no Seminário 8** — o protótipo é a resposta prática à tese: devolve ao cidadão o contraditório que INSS/SyRI suprimem; tabela persona→artigo; nota de originalidade (não é ouvidoria; integra explicabilidade + geração de peças + viés num fluxo só).
6. **Roadmap leve e aberto** — próximos passos sem cronograma rígido (a ideia fica em aberto).

> Nota: o **plano do deck costurado (design H)** NÃO entra neste documento — fica como follow-up separado se a Ana quiser, para não inflar o entregável principal.

## Arquivos a criar/editar (na execução, pós-aprovação)

- **Criar** `~/Documents/Seminario-AP4.0-Entregaveis/PLANO-PROTOTIPO-FINAL.md` (Entregável C).
- **Criar** `~/Documents/Seminario-AP4.0-Entregaveis/ROTEIRO-FALAS-ANA.md` (Entregável B).
- **Editar** `~/Documents/Seminario-AP4.0-Entregaveis/prototipo-demo-algoritmo-em-disputa.html` — adicionar caso INSS canned (fallback offline, Entregável A/Plano B).
- **Editar** `.../algoritmo-em-disputa/frontend/src/components/ChatInterface.jsx` — sample/atalho do caso INSS (Entregável A/Plano A). *(arquivo dentro do repo git da tese; é .jsx, não dispara o hook de nomenclatura de notas .md do vault.)*

## Verificação (end-to-end)

1. **Fallback canned:** abrir `prototipo-demo-algoritmo-em-disputa.html` no navegador → selecionar o caso INSS → ver as 3 fases renderizarem com texto coerente. (Verifico via Playwright/servidor HTTP local.)
2. **App live:** `curl -sS https://openrouter.ai/api/v1/chat/completions` responde; `./start.sh`; abrir :5173; submeter o caso INSS; confirmar Fase 1→2→3 completando e o Relator emitindo parecer. (Depende de rede/saldo OpenRouter — por isso o fallback.)
3. **Documentos:** revisão de leitura do `PLANO-PROTOTIPO-FINAL.md` e `ROTEIRO-FALAS-ANA.md` pela Ana (são os entregáveis de texto; sem teste automatizado).

## Aberto para a Ana confirmar na execução
- Modelos do Conselho hoje são antigos (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, Llama 3.1). Posso atualizar para os atuais ao preparar a demo, ou deixar como está para não arriscar mudança de comportamento na véspera. (Default: **deixar como está** para amanhã; atualizar fica no T+1.)
