# Plano do protótipo final — GovLens / DueProcess.AI + Conselho de Contestação Algorítmica

**Seminário 8 (PPGD/UFSC) · Ana Vitória Vanzin & Vinícius Oliveira**
Documento de planejamento — *a Ana implementa depois; a ideia fica em aberto.*
Versão 2026-05-24.

---

## 1. Contexto e decisão central

O Seminário 8 articula quatro artigos do *International Journal of Digital Law* (Salgado&Saito; Cristóvam&Hahn; Sarlet&Molinaro; Tavares, Bitencourt&Cristóvam) sob uma tese autoral: **o Estado como Regulador ⇄ Regulado — "Do Poder-Dever ao Dever-Poder"**. O mesmo aparato que edita LAI/LGPD/ANPD/CNJ é o maior controlador de dados e usuário de algoritmos, com incentivo estrutural a subaplicar a norma contra o cidadão.

Faltava o **protótipo**. A pergunta — *dado o material do Vinícius, qual o melhor protótipo?* — tem uma resposta não-acidental:

> **O melhor protótipo é o Conselho de Contestação Algorítmica dentro da casca GovLens/DueProcess.AI — porque as 4 personas do Conselho mapeiam 1:1 nos 4 artigos expostos.** É a dogmática do seminário virando software.

| Persona (motor) | Artigo IJDL | Eixo jurídico |
|---|---|---|
| **Defensoria Pública** | Tavares, Bitencourt & Cristóvam | contraditório algorítmico prévio (art. 5º, LV) |
| **Cientista de Dados** | (transversal — explicabilidade) | XAI, viés de proxy, transparência |
| **Administrador Público** | Cristóvam & Hahn | governo aberto, governança, Lei 14.129 |
| **Cidadão / Direitos Digitais** | Salgado & Saito + Sarlet & Molinaro | autodeterminação informativa, LGPD, exclusão digital |

O **Relator** sintetiza — é a "síntese final" dos slides feita máquina.

**Caso-âncora: INSS** (negativa automática de aposentadoria rural, sem contraditório prévio, em desacordo com a IN 128/2022 — caso central da tabela e exemplo de Tavares et al.). **SyRI** (Haia, 2020) é o precedente internacional/comparativo.

---

## 2. Conceito do protótipo

**GovLens/DueProcess.AI** é uma **plataforma de contestabilidade**: o cidadão entra com uma decisão automatizada do poder público; a plataforma a **traduz, audita e arma a contestação**. O **Conselho de Contestação Algorítmica** (4 personas LLM, 3 fases) é o **motor de análise** por trás da tela de parecer.

Não é ouvidoria nem produto comercial — é um **protótipo conceitual/acadêmico** cujo diferencial é a **integração crítica**: explicabilidade + mapa de dados + geração de peças jurídicas + painel de viés + simulação de exclusão, num único fluxo. (Ver `ANALISE-ORIGINALIDADE.md`: o gap no Brasil está confirmado — Fala.BR e "Conteste Aqui" existem, mas nenhum explica o algoritmo nem gera estratégia jurídica.)

**Frase-tese do artefato:**
> "A Administração Pública 4.0 só é legítima quando a eficiência do uso de dados e algoritmos está subordinada a mecanismos efetivos de contestação, correção de erros e inclusão digital — assegurando o contraditório e a ampla defesa."

---

## 3. Fluxo unificado (7 telas)

```
0. Você sabe que foi uma máquina? → [CAMADA PROPEDÊUTICA] explica, em linguagem cidadã, que houve
                                     decisão algorítmica e o que isso significa (literacia antes da contestação)
1. Consulta / Upload        → cidadão cola/descreve a decisão automatizada
2. Motivação ou caixa-preta? → destaca o que o ato NÃO diz (base legal, dados, revisão humana, como recorrer)
3. Mapa de dados             → dados declarados + inferidos que alimentaram a decisão
4. Conselho de Contestação   → [O MOTOR] 4 personas → avaliação cruzada → Relator (parecer fundamentado)
5. Estratégia jurídica       → minutas revisáveis: pedido LAI, requerimento LGPD art. 20, recurso administrativo
6. Tensão democrática        → eixos eficiência × direitos × controle × inclusão; perfil "baixa conectividade"
```

A tela **4** é o coração e o que já existe como app. As telas **1-2-3-5-6** já estão prototipadas (canned) em `dueprocess-dashboard.html` e `prototipo-interativo.html` — servem de referência de UI. A tela **0** é a camada propedêutica (ver §6).

---

## 4. Arquitetura reaproveitando o que já existe

> Princípio: **não construir do zero**. Os ativos já cobrem ~70% do conceito.

### Motor de análise (tela 4) — JÁ FUNCIONA
App `algoritmo-em-disputa/` (FastAPI + React + OpenRouter):
- **Personas** em `backend/config.py:20-47` (já mapeadas nos artigos/leis).
- **Fluxo de 3 fases** em `backend/council.py:26-171` (Fase 1 pareceres paralelos → Fase 2 avaliação cruzada anônima → Fase 3 Relator).
- **API** `POST /api/conversations/{id}/message` (`backend/main.py`).
- Backend porta **8001**, frontend **5173**. `.env` com `OPENROUTER_API_KEY` já configurada.

### Casca / telas 1-2-3-5-6 — REFERÊNCIA DE UI PRONTA
- `dueprocess-dashboard.html` — telas de mapa de dados, painel de viés demográfico, ações (LAI / LGPD / recurso / encaminhar à DPU), preview de minuta. Visual SaaS claro, Inter, azul.
- `prototipo-interativo.html` — fluxo GovLens de 5 passos + simulação de exclusão digital + tensão democrática.

### Integração proposta (o que falta costurar)
1. Endpoint `GET /api/cases` no backend servindo **casos-template** (incluindo INSS) — hoje os casos são texto livre; centralizar como dados.
2. Da **tela 4**, chamar o Conselho a partir do caso selecionado (já é o fluxo atual; basta alimentar com o caso-template).
3. Migrar as telas canned (`dueprocess-dashboard.html`) para componentes React dentro do mesmo frontend, ou embutir via rota — decisão de implementação em aberto.
4. **Tela 5 (estratégia jurídica):** gerar minutas a partir do parecer do Relator (Fase 3) — o Relator já produz recomendação e fundamentação; transformar em templates LAI/LGPD/recurso.

### Stack (sugerida, não prescritiva — herdada da proposta original)
Backend Python (FastAPI) · Frontend React/Vite · LLMs via OpenRouter · armazenamento JSON local (já existe) → PostgreSQL se evoluir · auth Gov.br (aspiracional).

---

## 5. Módulos: Núcleo demonstrável × Aberto/aspiracional

### Núcleo MVP (o que entrega valor já — telas 1, 2, 4, 5)
- Tela 1: entrada do caso (texto/template).
- Tela 2: "motivação ou caixa-preta?" — checklist do que o ato omite.
- Tela 4: **Conselho rodando** (já funciona) — caso INSS.
- Tela 5: minutas LAI / LGPD art. 20 / recurso, derivadas do parecer.

Esse núcleo já é **demonstrável em sala** e usa código existente.

### Aberto / aspiracional (a Ana decide depois — entram como "arquitetura de referência", não build obrigatório)
- **Painel de viés demográfico** ao vivo (tela 3 estendida) — hoje é canned em `dueprocess-dashboard.html`.
- **Simulação de exclusão digital** (tela 6) — toggle "perfil baixa conectividade" (existe canned em `prototipo-interativo.html`).
- **Blockchain só para hash de integridade** do relatório (nunca dados pessoais — conflita com LGPD).
- **Canais não-digitais** (USSD/SMS) para inclusão — Twilio ou similar.
- **Integrações** Gov.br (login ICP-Brasil), TCU/CGU (alertas de risco), bases abertas.
- **Differential privacy** e logs de finalidade na coleta.
- **Atualizar modelos do Conselho** (hoje Claude 3.5 Sonnet / GPT-4o / Gemini 1.5 / Llama 3.1 → versões atuais).

> A divisão núcleo/aberto é o que torna honesto o "manter a ideia em aberto": o núcleo é concreto e pronto; o aberto é o roadmap que a Ana molda.

---

## 6. Ancoragem no Seminário 8 (por que isso fecha a tese)

- O protótipo é a **resposta prática** à tese Regulador⇄Regulado: ele **devolve ao cidadão o contraditório que INSS/SyRI suprimem**.
- O mapeamento **persona → artigo** faz a demonstração *encarnar* a bibliografia — cada voz do Conselho é uma das leituras apresentadas.
- O caso INSS condensa os quatro eixos: contraditório (Tavares), explicabilidade (transversal), governança/IN 128/2022 (Cristóvam&Hahn), proteção de dados e exclusão (Salgado&Saito / Sarlet&Molinaro).
- **Originalidade:** não é ouvidoria; integra num fluxo só o que hoje está disperso (ver `ANALISE-ORIGINALIDADE.md`).

---

## 6.1 Contribuição propedêutica (camada autoral da Ana) — princípio de design

Duas nuances que vão **além** do que a bibliografia/Vinícius cobriu (explicabilidade e contraditório) e que o protótipo deve encarnar:

1. **Literacia algorítmica antes da contestação.** O contraditório pressupõe que o cidadão *saiba* que houve decisão algorítmica e *compreenda* o que isso é. Muitos não sabem. Logo, a contestabilidade exige um degrau anterior — **inteligibilidade, não só transparência** (um portal pode ser transparente sem ser compreensível). → vira a **Tela 0** ("Você sabe que foi uma máquina?") + a obrigação de tradução em linguagem cidadã em toda a plataforma.

2. **Notícia humana para vulneráveis.** Tese normativa: decisões podem ser automatizadas, mas a **comunicação** de uma decisão adversa (negativa de benefício, corte de auxílio) a pessoa em situação de vulnerabilidade deveria ser feita por **um ser humano, não por uma máquina**. O humano no circuito não só na *decisão*, mas no **cuidado da comunicação**. → vira uma **regra de fluxo**: casos sinalizados como "vulnerável + decisão adversa" disparam um *flag de notícia humana* (a plataforma recomenda/exige comunicação assistida, não notificação automática fria).

> Essas duas nuances já estão refletidas: (a) na persona **Cidadão** do app (`backend/config.py`) e do mock canned, e (b) no parecer do Relator. No protótipo final, materializam-se na Tela 0 e no flag de notícia humana. É a camada que diferencia a abordagem da Ana — dignidade do administrado também está em *como* ele é avisado.

## 7. Roadmap leve (aberto)

Sem cronograma rígido — sequência sugerida, a Ana ajusta:

1. **Consolidar o motor** — endpoint `/api/cases` + caso INSS como template (parte já preparada para a demo).
2. **Trazer as telas canned para o app** — portar `dueprocess-dashboard.html` (telas 1-2-3-5) para componentes React.
3. **Costurar tela 4 → tela 5** — gerar minutas a partir do parecer do Relator.
4. **Tela 6 (tensão democrática)** + simulação de exclusão.
5. **Decidir o aspiracional** — quais módulos abertos valem a pena (blockchain/USSD/integrações).
6. **Piloto conceitual** — escrever um laudo de conformidade (LGPD, Marco Civil, LAI) como no plano original.

---

## 8. Estado dos ativos (referência rápida de arquivos)

| Ativo | Caminho | Estado |
|---|---|---|
| App Conselho (motor, tela 4) | `…/vault/2026-Q2-Seminario-AD/algoritmo-em-disputa/` | ✅ **Funciona ao vivo** (modelos pagos baratos do OpenRouter, crédito ativo; UI acentuada/PT; botão caso INSS). Testado: 4 personas + ranking + Relator (7k chars) com todas as nuances |
| Casca GovLens (telas 1-3-5) | `Seminario-AP4.0-Entregaveis/dueprocess-dashboard.html` | Canned, referência de UI |
| Navegador didático | `Seminario-AP4.0-Entregaveis/prototipo-interativo.html` | Canned (Civitas/Algoritmo/GovLens/Tensão) |
| Demo canned do Conselho | `Seminario-AP4.0-Entregaveis/prototipo-demo-algoritmo-em-disputa.html` | **Caso INSS adicionado** (fallback offline) |
| Proposta original (arquitetura, 6 telas, jurídico) | `Seminario-AP4.0-Entregaveis/03-Summaries_Proposta-Seminário-AP4-0.md` | Base de referência |
| Análise de originalidade | `Seminario-AP4.0-Entregaveis/ANALISE-ORIGINALIDADE.md` | Gap confirmado |
| Roteiro de falas (Ana) | `Seminario-AP4.0-Entregaveis/ROTEIRO-FALAS-ANA.md` | Pronto para amanhã |

---

## 9. Fora do escopo deste documento

- O **plano do deck costurado (design H, dossiê→painel)** — fica como follow-up separado, se a Ana quiser, para não inflar este documento.
- Compilação/distribuição pública do protótipo (é protótipo acadêmico, não produto).

---

*Documento de planejamento. O núcleo está pronto para demonstração; o aspiracional é deliberadamente aberto para a Ana decidir o rumo da implementação.*
