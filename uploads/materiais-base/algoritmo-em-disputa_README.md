# Algoritmo em Disputa

## Conselho de Contestacao Algoritmica — Prototipo Conceitual

Este e um fork customizado do [llm-council](https://github.com/karpathy/llm-council) de Andrej Karpathy, adaptado para um contexto juridico-brasileiro de contestacao de decisoes automatizadas na Administracao Publica.

## O que e

Em vez de um "Conselho de LLMs" generico respondendo perguntas, esta ferramenta simula um **Conselho de Contestacao Algoritmica** onde 4 perspectivas juridicas analisam uma mesma decisao automatizada:

1. **Defensoria Publica** — tutela de direitos fundamentais
2. **Cientista de Dados** — explicabilidade e transparencia algoritmica
3. **Administrador Publico** — governanca e legalidade
4. **Cidadao / Direitos Digitais** — perspectiva do administrado

Apos 4 pareceres individuais (Fase 1), os conselheiros avaliam uns aos outros anonimamente (Fase 2), e um Relator sintetiza um parecer final juridicamente fundamentado (Fase 3).

## Diferenca do original

| llm-council original | Algoritmo em Disputa |
|---|---|
| 4 modelos genericos | 4 personas juridicas brasileiras |
| Respostas a perguntas gerais | Analise de decisoes automatizadas |
| Ranking por "accuracy/insight" | Ranking por "protecao aos direitos do cidadao" |
| Chairman sintetiza resposta | Relator emite parecer final com fundamentacao juridica |
| UI clara/startup | UI escura institucional (dark academia) |

## Stack

- **Backend:** FastAPI, OpenRouter (4 modelos em paralelo)
- **Frontend:** React + Vite
- **Personas:** Prompts juridicos customizados por modelo
- **Casos:** 3 cenarios reais brasileiros pre-carregados (Bolsa Familia, IPTU, Auxilio Emergencial)

## Como usar (demo standalone)

Abra o arquivo `prototipo-demo-algoritmo-em-disputa.html` em qualquer navegador. Nao requer backend nem API.

## Como usar (com backend real)

1. Configure `.env` com sua chave OpenRouter:
   ```
   OPENROUTER_API_KEY=sk-or-v1-...
   ```

2. Instale dependencias:
   ```bash
   uv sync
   cd frontend && npm install && cd ..
   ```

3. Inicie:
   ```bash
   ./start.sh
   ```

4. Acesse http://localhost:5173

## Casos de teste pre-carregados

- **Bolsa Familia Cancelado** — inconsistencia de dados no Cadastro Unico
- **IPTU Triplicado** — reclassificacao automatizada de imovel residencial para misto
- **Auxilio Emergencial Negado** — erro no cruzamento CNIS/PIS

## Contexto academico

Este prototipo foi desenvolvido para o Seminario de Direito Digital e Politicas Publicas (2026), como material de discussao sobre "Administraacao Publica 4.0: big data, blockchain, smart contracts e smart cities no Brasil". Nao e um produto comercial — e uma ferramenta conceitual para demonstrar o que falta no Brasil em termos de explicabilidade algoritmica e contestacao de decisoes automatizadas.

## Licenca

Como fork do llm-council, segue a mesma licenca. Karpathy disse: "vibe coded as a fun Saturday hack, not going to support it in any way". Este fork e da mesma natureza.
