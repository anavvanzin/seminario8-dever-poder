# Tabela de Acompanhamento Experimental (Experiment Tracker)

Esta tabela monitora a execução do estudo de usabilidade e compreensão.

| ID da Rodada | Milestone | Objetivo | Variante / Interface | Tamanho da Amostra (N) | Métricas a Coletar | Prioridade | Status | Notas |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **R-PILOT** | M1 | Validar questionário e fluxo de testes. | Texto Simples Estático | N = 3 | Duração, Dificuldade | OBRIGATÓRIO | TODO | Piloto interno para identificar erros nas perguntas. |
| **R-CTRL-01** | M2 | Coleta do grupo de controle. | Tela Meu INSS Estática | N = 20 | Compreensão (0-5), Carga Cognitiva | OBRIGATÓRIO | TODO | Representa a situação atual do cidadão (As-Is). |
| **R-BASE-02** | M2 | Coleta do baseline de linguagem simples. | PDF Estático Simples | N = 20 | Compreensão (0-5), Carga Cognitiva | OBRIGATÓRIO | TODO | Essencial para o Bloco 3 (Simplicity Check). |
| **R-TREAT-03**| M2 | Coleta do grupo de tratamento. | GovLens / Conselho Interativo | N = 20 | Compreensão (0-5), Carga Cognitiva, Tempo | OBRIGATÓRIO | TODO | Teste do protótipo com assistente ativo. |
| **R-QUAL-04** | M4 | Análise de minutas geradas. | Minutas do Tratamento | N = 20 | Nota de Adequação Técnica (0-10) | OBRIGATÓRIO | TODO | Avaliação cega por revisor jurídico (Vinícius). |
| **R-SIM-05**  | M4 | Teste de limite de interface (Ablação). | Sem Assistência de IA | N = 10 | Tempo de Execução, Erros | OPCIONAL | TODO | Avalia a usabilidade do Conselho sem IA (apenas UI estática). |

---

## Legenda de Status
* **TODO:** Não iniciado.
* **IN_PROGRESS:** Coleta de dados ou análise em andamento.
* **DONE:** Concluído, dados consolidados no banco de dados do estudo.
* **ABORTED:** Cancelado devido a falha técnica ou de amostragem.
