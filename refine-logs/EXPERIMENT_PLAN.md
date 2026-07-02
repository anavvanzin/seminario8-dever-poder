# Planejamento Experimental — Contestabilidade Algorítmica no Processo Administrativo

**Problema**: A opacidade das decisões administrativas totalmente automatizadas (como os indeferimentos automáticos de benefícios previdenciários e assistenciais no Brasil) inviabiliza o exercício pleno do contraditório e da ampla defesa pelo cidadão vulnerável, gerando assimetria informacional e sobrecarga do Poder Judiciário.

**Tese**: Uma camada de interface interativa e modular de contestabilidade algorítmica (ex.: protótipo GovLens/Conselho de Contestação) eleva o índice de compreensão do cidadão sobre os fundamentos do indeferimento automatizado e facilita a formulação de defesas administrativas qualificadas, superando o modelo de notificação estática e opaca.

**Data**: 2 de julho de 2026

---

## Mapa de Hipóteses e Claims (Claims Map)

| Identificador | Hipótese / Claim | Relevância Científica | Evidência Mínima Convincente | Blocos Vinculados |
| :--- | :--- | :--- | :--- | :--- |
| **C1** | A interface modular (GovLens) aumenta a compreensão dos fundamentos do indeferimento automático. | Demonstra que a transparência ativa reduz a assimetria informativa no processo digital. | Aumento estatisticamente significativo no índice de acertos de questionário de compreensão pós-teste. | Bloco 1 (Anchor Result) |
| **C2** | A assistência na formulação de recursos melhora a adequação técnica da contestação. | Valida a viabilidade de instrumentos de defesa simplificados e eficientes. | Redução do tempo de redação com aumento da precisão no apontamento do erro sistêmico. | Bloco 2 (Novelty Isolation) |
| **A0 (Anti-Claim)**| O ganho de compreensão provém apenas da simplificação de texto jurídico. | Garante que a interatividade e a modularidade da ferramenta são a verdadeira causa dos ganhos. | Comparação com um baseline de texto estático porém simplificado (linguagem simples estática). | Bloco 3 (Simplicity Check) |

---

## Storyline do Artigo

### O manuscrito deve demonstrar:
1. A existência de um gap de contestabilidade nas decisões automáticas da Administração Pública Federal (com foco no INSS).
2. A formulação do modelo teórico do "Dever-Poder" de transparência algorítmica.
3. A superioridade da contestabilidade interativa (tratamento) frente à notificação tradicional (controle) e à linguagem simples estática (baseline).

### O apêndice apoiará:
* Detalhes da arquitetura de integração do protótipo com Large Language Models (Gemini API / Cloud Run) para geração dos pareceres.
* O questionário completo aplicado no teste de usabilidade.

### Cortes deliberados:
* Análises detalhadas de desempenho de processamento (latência do modelo de linguagem), pois o foco do artigo é a percepção jurídica e de usabilidade do cidadão, não a infraestrutura técnica.

---

## Detalhamento dos Blocos de Experimento

### Bloco 1: Main Anchor Result (Compreensão da Decisão)
* **Claim Testado:** C1 (Compreensão do indeferimento).
* **Objetivo:** Medir se a interface do Conselho melhora o entendimento sobre o motivo da negativa do benefício (ex.: falta de comprovação de atividade rural tempo X).
* **População/Dataset:** Estudo de usuário controlado com 60 participantes divididos em três grupos (20 controle, 20 baseline de texto simples, 20 tratamento interativo).
* **Sistemas Comparados:**
  * **Controle:** Tela estática tradicional do Meu INSS com listagem crua de exigências.
  * **Tratamento:** Interface GovLens/Conselho interativa com pareceres modulares segmentados.
* **Métricas:** 
  1. Acurácia nas respostas de um questionário de compreensão de 5 perguntas sobre os motivos da decisão (escore de 0 a 5).
  2. Escala de Carga Cognitiva de NASA-TLX (1 a 20).
* **Critério de Sucesso:** O grupo do tratamento deve apresentar escore de compreensão significativamente maior ($p < 0,05$) e carga cognitiva menor do que o grupo de controle.
* **Interpretação de Falha:** Se não houver diferença significativa, a modularização visual de sistemas de apoio não é suficiente para superar as barreiras de compreensão de usuários sem treinamento.
* **Destino no Artigo:** Tabela 1 e Figura 2 (Gráfico de barras de acurácia por grupo).

### Bloco 2: Novelty Isolation (Qualidade da Contestação)
* **Claim Testado:** C2 (Eficiência na defesa).
* **Objetivo:** Avaliar a precisão e completude dos recursos/defesas administrativas gerados a partir do protótipo.
* **População/Dataset:** Mesmos participantes do Bloco 1 formulando uma minuta de defesa para o caso fictício apresentado.
* **Sistemas Comparados:**
  * **Controle:** Editor de texto livre sem assistência.
  * **Tratamento:** Conselho GovLens orientando passo a passo a juntada de documentos e preenchimento de lacunas baseando-se no parecer.
* **Métricas:**
  1. Tempo total para finalizar a minuta de contestação (segundos).
  2. Classificação de qualidade da contestação (0 a 10) baseada na exatidão da indicação do erro administrativo.
* **Critério de Sucesso:** Redução do tempo médio de formulação com notas de qualidade de minuta estatisticamente superiores no grupo de tratamento.
* **Interpretação de Falha:** O assistente interativo pode atuar como um gargalo cognitivo se a interface for complexa, aumentando o tempo total sem necessariamente refinar a qualidade técnica da contestação.
* **Destino no Artigo:** Tabela 2.

### Bloco 3: Simplicity Check (Linguagem Simples Estática vs. Interatividade)
* **Claim Testado:** A0 (Eficácia da interatividade).
* **Objetivo:** Isolar se o ganho de usabilidade provém da modularidade e interatividade ou apenas da redação in linguagem simples.
* **Sistemas Comparados:**
  * **Baseline (Linguagem Simples Estática):** Um texto corrido estático redigido em português claro e simplificado, sem elementos de interface interativa, links ou acordeões.
  * **Tratamento:** A interface GovLens com elementos modulares clicáveis e assistente ativo.
* **Métricas:** Acurácia do questionário de compreensão e tempo de busca de informação na interface.
* **Critério de Sucesso:** A interface modular supera o texto simples estático na retenção de informação técnica complexa.
* **Destino no Artigo:** Seção de Resultados e Discussão (Figura 3).

---

## Cronograma e Milestones de Execução

| Milestone | Objetivo | Atividades | Decision Gate | Riscos / Mitigações |
| :--- | :--- | :--- | :--- | :--- |
| **M0: Sanity** | Configuração dos cenários previdenciários e do questionário. | Redigir caso-âncora (Aposentadoria Rural INSS) e montar o formulário com o mock de teste. | Validação jurídica do caso fictício. | Risco: Caso muito complexo. Mitigação: Reduzir a uma única exigência documental pendente. |
| **M1: Baselines**| Teste piloto dos fluxos de controle e baseline. | Rodar o piloto com 3 pessoas no fluxo tradicional do Meu INSS e no PDF estático de linguagem simples. | Métricas piloto coletadas e estáveis. | Risco: Carga de tarefas confusa. Mitigação: Ajustar as perguntas do questionário. |
| **M2: Treatment**| Execução do estudo de usuários com o GovLens. | Aplicar os testes com o protótipo GovLens interativo com o grupo de tratamento. | Conclusão dos 20 testes válidos no grupo de tratamento. | Risco: Desistência de participantes. Mitigação: Recrutar 5 participantes de backup. |
| **M3: Decision** | Processamento estatístico e análise de dados. | Rodar testes de hipótese (t-test ou ANOVA) nas métricas de acurácia, tempo e carga de trabalho. | Análise de significância estatística concluída. | Risco: Ausência de significância. Mitigação: Refinar a análise qualitativa das barreiras cognitivas observadas. |
| **M4: Polish** | Finalização do manuscrito e diagramação das figuras. | Completar a escrita do artigo, integrar o abstract bilíngue e gerar os gráficos finais no matplotlib. | Manuscrito pronto no padrão ABNT. | Risco: Desalinhamento com padrões de escrita científica. Mitigação: Aplicar auditoria de escrita de IA. |

---

## Recursos e Orçamento Computacional
* **Ferramenta de Simulação:** Protótipo GovLens local rodando em NodeJS com suporte a Markdown.
* **Pessoas Necessárias:** 1 pesquisador de campo (estagiário de apoio) + 60 voluntários acadêmicos/usuários.
* **Orçamento de API de LLM:** Uso de créditos Gemini para renderização dos pareceres sob demanda.
* **Maior Gargalo:** Agendamento e condução das 60 entrevistas individuais do estudo de usuário.
