# SCRIPT COMPLETO — Seminário 8 · 25 de maio de 2026

**Administração Pública orientada por dados · Governo aberto · LGPD · processo digital · decisão algorítmica**

Ana Vitória Vanzin & Vinícius Oliveira · PPGD/UFSC · Prof. Cristóvam

---

## COMO USAR ESTE SCRIPT

As falas são intercaladas. O Vinícius entrega a **dogmática** (conceito, artigo, doutrina); a Ana entrega a **tensão** (o Estado contra si mesmo, o caso brasileiro, a tese Regulador ⇄ Regulado). Cada bloco fecha com a Ana passando a palavra de volta.

**Duração total estimada:** ~40 minutos de exposição + ~10 minutos de debate.

**Regra de ouro:** o Vinícius dá o **conceito**; a Ana dá a **tensão** e o **caso**. Ninguém lê — todo mundo fala.

---

## ATO 0 — ANTES DE COMEÇAR (checklist técnico)

- [ ] Abrir `Seminario8.html` no navegador. Testar ← →. Checar se fontes carregaram.
- [ ] Abrir `Conselho.html` em OUTRA aba (rede de segurança — Plano B).
- [ ] Se for usar Plano A (demo ao vivo): `cd algoritmo-em-disputa && ./start.sh`, abrir `localhost:5173`, clicar "Carregar caso INSS (demo)" para pré-aquecer.
- [ ] Decidir: Plano A ou B? (A é mais impactante, B é à prova de falha.)
- [ ] Celular no silencioso. Garrafa d'água. Relógio visível.

---

## ATO 1 — ABERTURA (~2 min)

### SLIDE 01 · Capa

**Vinícius:**

"Bom dia, boa tarde a todos. Obrigado, professor Cristóvam, pela disciplina e pelo espaço. Hoje a Ana e eu vamos apresentar quatro artigos do International Journal of Digital Law, mas não como quatro leituras separadas. A gente vai ler os quatro como um único arco dramático."

"Os artigos são: Salgado e Saito, sobre privacidade e multifuncionalidade; Cristóvam e Hahn, sobre governo aberto e INDA; Sarlet e Molinaro, sobre big data e proteção de dados na saúde; e Tavares, Bitencourt e Cristóvam, sobre explicabilidade e contraditório algorítmico."

"Eu vou expor a dogmática de cada um. A Ana entra depois com uma leitura crítica que costura os quatro — e que é a nossa contribuição autoral."

### SLIDE 02 · Pergunta orientadora

**Vinícius:**

"Mas antes de abrir os artigos, a gente precisa de uma pergunta que organize tudo. A pergunta é esta: **quando a Administração Pública se torna digital, ela se torna automaticamente mais democrática?**"

"A resposta curta é não. A digitalização pode ampliar acesso, eficiência e transparência — mas também pode criar novas formas de opacidade administrativa, deslocar decisões públicas para sistemas que ninguém entende, e produzir uma cidadania digital de duas velocidades. A tecnologia não é neutra. E o Direito Administrativo existe exatamente para isso: para domesticar o poder, inclusive o poder algorítmico."

### SLIDE 03 · Chave de leitura (Janus)

**Ana:**

"O Vinícius deu o mapa. Deixa eu dar a chave que vai abrir todas as portas."

"O Poder Público aparece nestes quatro artigos em **duas posições ao mesmo tempo**. Ele é o **Regulador** — edita a LAI, a LGPD, cria a ANPD, publica resoluções do CNJ, edita instruções normativas como a IN 128 do INSS. E ele é também o **Regulado** — é o maior controlador de dados pessoais do país, é o maior usuário de algoritmos que decidem sobre direitos, é o maior contratante de plataformas de inteligência artificial."

"A pergunta que a gente vai perseguir nos próximos 40 minutos é: **o que acontece quando o mesmo aparato que faz a regra é o que mais tem incentivo para descumpri-la contra o cidadão?**"

"A gente chama esse movimento de **'do poder-dever ao dever-poder'**. O Estado tem o *poder-dever* de regular — mas quando ele é o principal destinatário da norma que ele mesmo editou, esse poder se inverte. O dever de cumprir a regra que ele criou vira um *dever-poder*: uma obrigação que o próprio Estado é o primeiro a relativizar. É isso que costura os quatro artigos."

"Vinícius, volta pra ti."

---

## ATO 2 — PARTE I: PROMESSA (~10 min)

### SLIDE 04 · Divisor Parte I

**Vinícius:**

"Vamos aos dois primeiros artigos. Eles formam o que a gente chama de **promessa** da Administração Pública digital: a ideia de que dados, transparência e proteção podem produzir um Estado mais eficiente e mais democrático."

### SLIDES 05–08 · Salgado & Saito — Privacidade e multifuncionalidade

**Vinícius:**

"Salgado e Saito partem de uma premissa que parece simples mas não é: **a privacidade não é uma coisa só**. Eles propõem uma leitura multifuncional do direito à privacidade — três dimensões que operam ao mesmo tempo."

"**Primeira: dimensão de defesa.** O direito de ser deixado em paz. O Estado não pode invadir a esfera privada sem justificativa constitucional. Essa é a leitura clássica, consolidada desde o célebre artigo de Warren e Brandeis em 1890, e reforçada no Brasil com a ADI 6.387 — que declarou inconstitucional a MP 954, aquela que obrigava as teles a compartilharem dados de usuários com o IBGE durante a pandemia."

"**Segunda: prestação normativa.** O Estado não pode só se abster de violar — ele tem que criar o aparato institucional que protege. É a LGPD. É a ANPD. São as normas que estruturam a proteção de dados como política pública. A Constituição, no art. 5º, LXXIX, introduzido pela EC 115/2022, tornou a proteção de dados pessoais direito fundamental expresso."

"**Terceira: prestação fática.** Não basta ter lei. O Estado tem que entregar: fiscalizar, sancionar, educar, orientar. A ANPD não pode ser um conselho de enfeite — e aqui entra o problema crônico brasileiro de criar autarquias sem dar dentes, pessoal e orçamento."

"Os autores traçam também uma linha histórica: das *gerações* legislativas da privacidade. Primeira geração, anos 1970 — leis setoriais, tipo crédito e saúde. Segunda, anos 1980 e 1990 — leis gerais nacionais, como o Data Protection Act inglês. Terceira, 1990 a 2010 — diretivas comunitárias, como a 95/46 da União Europeia. Quarta geração, 2016 em diante — o RGPD europeu e a LGPD brasileira. A cada geração, o direito se expande e a regulação se sofistica."

"Agora a Ana entra com a leitura crítica. Ana?"

### SLIDE 09 · ★ Nossa leitura I

**Ana:**

"Obrigada. Salgado e Saito fazem uma ressalva que é o coração da nossa tese. Eles dizem assim: mesmo com todo esse aparato — LGPD, ANPD, gerações legislativas — **a dimensão de defesa não desaparece**. Por quê? Porque o Estado continua sendo, nas palavras deles, 'um poderoso agente de tratamento de dados'."

"Eles lembram do caso Snowden — uma agência de Estado coletando dados em massa, sem consentimento e sem finalidade. Eles lembram da MP 954 de 2020 — o próprio Executivo quis compartilhar dados de telecomunicação de 200 milhões de brasileiros sem finalidade clara. Resultado: o STF teve que conter o governo na ADI 6.387. A **autotutela administrativa não bastou**. Foi preciso outro Poder — o Judiciário — para segurar o regulador."

"Isso é o Regulador ⇄ Regulado em estado puro. O mesmo Estado que edita a LGPD é aquele cujo braço executivo tenta furar a LGPD. A autotutela — que é um dos atributos clássicos do ato administrativo — falhou. E se falhou nesse caso, falha em quantos outros que não chegam ao STF?"

"Essa é a voz da persona **Cidadão** no nosso protótipo: o sujeito que a norma foi feita para proteger, mas que está exatamente na mira do maior violador."

"Vinícius."

---

### SLIDES 10–14 · Cristóvam & Hahn — Governo aberto e INDA

**Vinícius:**

"Cristóvam e Hahn deslocam o debate: da proteção de dados para o governo aberto. Eles tratam abertura, transparência, proteção e regulação como um ciclo único. E ancoram isso em três referências teóricas pesadas."

"**Mark Moore** e a ideia de *valor público*: o gestor público não entrega só serviços — ele cria valor. E esse valor não se mede só por eficiência, mas por equidade, accountability e confiança. Um portal pode ser rápido e ainda assim não gerar valor público, se ninguém entende o que está lá."

"**Patrick Dunleavy** e a *governança digital*: a tecnologia não é ferramenta — ela redefine a própria burocracia. O Estado weberiano, com balcão e carimbo, dá lugar ao Estado-plataforma. Mas essa plataforma pode ser um shopping de serviços — ou pode ser um panóptico."

"**OCDE 2019** e a *Recomendação sobre Governo Aberto*: transparência, integridade, accountability e participação. O Brasil internalizou esses princípios na **INDA — Infraestrutura Nacional de Dados Abertos**, que o decreto que a instituiu organiza em torno de quatro pilares."

"Pilar um: **transparência ativa**. Quem já tentou baixar uma planilha de execução orçamentária em CSV e recebeu um PDF escaneado de uma planilha impressa sabe que a diferença entre 'publicar' e 'abrir' é um abismo."

"Pilar dois: **accountability**. Dado aberto sem trilha de auditoria é anedota."

"Pilar três: **participação**. A INDA prevê que o cidadão não é só consumidor de dado — ele coproduz. Isso é ambicioso e quase nunca acontece."

"Pilar quatro: **tecnologia**. Interoperabilidade, APIs, formatos abertos. Na prática, ainda estamos no reino do PDF e do portal que muda de URL a cada troca de gestão."

"E eles trazem evidência empírica. Três municípios que ilustram o espectro."

"**Recife**: 92,90% no PNTP 2025. Terceiro Selo Ouro consecutivo. Decreto formalizando a Estratégia de Transformação Digital em 2021. Conecta Recife com mais de 120 serviços. Portal da Transparência com 42 mil visitas mensais."

"**São Paulo**: 72,95% no PNTP 2023. Classificação Intermediária. Mas tem escala — SP156 com mais de 560 serviços digitais, economia estimada de R$ 3,3 milhões em dois anos. O 'Descomplica Digital' garante atendimento presencial assistido — inclusão digital como política."

"**Florianópolis**: 87,51% no PNTP 2025. Selo Ouro. Destaque no GeoPortal — 160 camadas de dados geoespaciais, download vetorial, viabilidades urbanísticas automatizadas. Mas evidências fragmentadas quanto à integração de serviços em plataforma única."

"O traço comum entre os três: **nenhum exibe instrumentos consolidados de explicabilidade algorítmica ou auditoria de decisões automatizadas**. O PNTP mede publicidade de itens de LAI e LRF — não mede se o algoritmo que negou um benefício é compreensível. Mede transparência fiscal, não transparência algorítmica."

"Ana, tua leitura?"

### SLIDE 14 · ★ Nossa leitura II

**Ana:**

"Cristóvam e Hahn tratam abertura e transparência como um ciclo virtuoso. Mas repara na assimetria: a abertura é um **dever jurídico** do Estado, e ao mesmo tempo é **o próprio Estado quem decide o que abre**."

"A LAI, no artigo 23, permite classificar informação como reservada, secreta, ultrassecreta. Quem classifica? O Executivo — o maior detentor de informação do país. Ou seja: a mesma lei que obriga a transparência dá ao Estado as chaves do sigilo. O Estado pode **opacizar a si mesmo**."

"Recife, São Paulo e Florianópolis são boas práticas — e a gente celebra isso. Mas são 3 municípios num país de 5.570. Apenas 22% dos municípios com mais de 200 mil habitantes têm plano de governo digital vigente. O federalismo virou federalismo de adesão: a Lei 14.129 só alcança o município que adota seus comandos por ato próprio. Cada prefeitura é um ponto de decisão soberana — e a maioria decide não decidir."

"Os portais são transparentes. Mas o algoritmo que decide não é. E o selo Ouro do PNTP não captura isso. Essa é a persona **Administrador Público** no nosso protótipo: a governança que promete abertura e controla as chaves do sigilo."

"Vinícius, fecha a Parte I?"

### SLIDE 15 · Síntese Parte I

**Vinícius:**

"Fecho curto. Os dois primeiros artigos nos dão a promessa: um Estado que protege dados e que se abre ao escrutínio público. A LGPD estrutura a defesa; a INDA estrutura a transparência. Mas a promessa é frágil — porque quem promete é também quem pode descumprir. A Parte II vai mostrar o choque: quando a escala do big data e a opacidade do algoritmo encontram essa promessa, o que acontece?"

---

## ATO 3 — PARTE II: CHOQUE (~10 min)

### SLIDE 16 · Divisor Parte II

**Vinícius:**

"Os dois próximos artigos viram a chave. Da promessa, entramos no choque de realidade."

### SLIDES 17–19 · Sarlet & Molinaro — Big data, saúde e proteção de dados

**Vinícius:**

"Sarlet e Molinaro escolheram o setor mais sensível possível: a saúde. E mostram que a LGPD — que celebramos no artigo anterior como conquista civilizatória — foi concebida num paradigma **pré-big data**."

"Eles identificam cinco campos em que o big data impacta a saúde."

"**Campo um: pesquisa clínica.** Dados de pacientes em escala inédita. Potencial enorme para descoberta de padrões, mas também para reidentificação de indivíduos 'anonimizados'. A anonimização no big data é uma promessa frágil: com datasets suficientemente grandes, a reidentificação é quase sempre possível."

"**Campo dois: saúde pública.** Modelos preditivos de epidemia, alocação de recursos. Mas quem decide qual variável prediz risco? Se o modelo usa CEP como proxy de vulnerabilidade, ele está usando território como destino."

"**Campo três: gestão hospitalar.** Eficiência operacional. Só que o hospital que otimiza leitos por algoritmo pode estar, sem saber, triando pacientes por perfil de 'custo esperado'. Isso é discriminação por proxy."

"**Campo quatro: medicina personalizada.** Genômica, biomarcadores. A fronteira mais promissora — e a mais perigosa para privacidade. Dado genético não se troca como senha."

"**Campo cinco: wearables e Internet das Coisas.** O relógio que mede batimentos, o app que registra sono. Esses dados já estão sendo comprados por seguradoras e planos de saúde. Nos Estados Unidos, isso já acontece. No Brasil, é questão de tempo."

"Diante disso, os autores interrogam os pilares da LGPD. **Finalidade:** qual é a finalidade de um algoritmo que encontra correlações que ninguém previu? **Minimização:** como minimizar dados num regime que vive de maximizá-los? **Consentimento:** o paciente do SUS consente com o quê, exatamente, quando os dados dele alimentam modelos que ele nunca soube que existiam?"

"Essa fragilidade é estrutural, e não acidental. A LGPD é uma lei analógica num mundo de dados exponenciais. E o Estado brasileiro é um dos maiores coletores de dados de saúde do planeta."

"Ana?"

### SLIDE 20 · ★ Nossa leitura III

**Ana:**

"Sarlet e Molinaro mostram que a LGPD foi concebida num paradigma pré-big data. E isso é grave **quando o Estado é o grande coletor**."

"O SUS é o maior sistema público de saúde do mundo. São bilhões de registros: atendimentos, internações, medicamentos, exames, vacinas. Em Santa Catarina, mais de 10 milhões de registros preditivos só na educação. Imagina na saúde."

"Enquanto isso, o suposto vazamento de **251 milhões de CPFs do Gov.br** — mais CPFs do que brasileiros vivos — mostra o tamanho do risco. O maior controlador de dados do país é o mesmo ente que deveria fiscalizar a proteção desses dados."

"Minimização vira letra morta. Consentimento vira ficção jurídica. Finalidade vira abstração. Quando quem coleta é quem regula, os freios da LGPD viram sugestões. E o cidadão — o titular dos dados — é o último a saber. Essa é a segunda face da persona **Cidadão** no nosso protótipo: o sujeito que a LGPD diz proteger, mas cujos dados vazam do lugar que deveria ser o mais seguro."

"Vinícius, o quarto artigo."

---

### SLIDES 21–24 · Tavares, Bitencourt & Cristóvam — Explicabilidade e contraditório algorítmico

**Vinícius:**

"Tavares, Bitencourt e Cristóvam fecham o ciclo com o artigo mais ambicioso dos quatro. Eles enfrentam o problema que os três anteriores apenas tangenciaram: quando a decisão automatizada viola direitos, como se contesta?"

"Primeiro: **algoritmo não é inteligência artificial, e IA não é algoritmo**. Algoritmo é uma sequência determinística de passos. Se A, então B. Inteligência artificial — especialmente machine learning — é um sistema que aprende padrões com dados e produz inferências que nem o programador consegue prever completamente. A diferença é crucial, porque a explicabilidade de um é trivial; a do outro, não."

"Segundo: **três tipologias de decisão**. Decisão humana — um servidor analisa um requerimento. Decisão híbrida — o algoritmo sugere, o humano decide. Decisão algorítmica — o sistema decide e o humano, se existir, só homologa. O problema brasileiro está na terceira: a homologação sem análise."

"Terceiro: **explicabilidade em três tempos**. Prévia — antes da decisão, o cidadão sabe quais dados serão usados e com que peso. Concomitante — durante o processo, o cidadão pode contestar os dados que o sistema está usando. Posterior — depois da decisão, o cidadão recebe uma explicação compreensível. A maior parte do debate brasileiro foca na posterior. Mas os autores defendem que **a explicabilidade prévia e concomitante são mais importantes**, porque permitem evitar o dano, não apenas remediá-lo."

"Quarto: **contraditório algorítmico**. O art. 5º, LV da Constituição garante contraditório e ampla defesa. Mas o que significa contraditório quando o 'acusador' é um modelo de machine learning? Contestar o quê — o código-fonte? A base de treinamento? O peso de cada variável? O viés do modelo? Os autores propõem uma releitura constitucional: **o contraditório em ambiente algorítmico precisa ser prévio à decisão**. Recurso administrativo depois do fato não sana a nulidade — porque o dano já está produzido."

"E aqui é onde o artigo encontra a realidade. Ana?"

### SLIDES 24–25 · ★ Nossa leitura IV + Transição para o Conflito

**Ana:**

"Esse é o artigo que vira software no nosso protótipo. Tavares e os coautores defendem que o contraditório tem que ser prévio — recurso depois não sana a nulidade. E o caso brasileiro é gritante."

"O **INSS** vem indeferindo aposentadoria rural de forma automática. Uma trabalhadora rural — segurada especial — pede a aposentadoria por idade. O sistema cruza CNIS, CadÚnico, dados do ITR, geolocalização. E **infere** que ela exerce atividade urbana. Inferência — não prova. Ignora a autodeclaração rural — que é o dado primário. E indefere. A notificação no Meu INSS diz apenas: 'NÃO COMPROVADA A QUALIDADE DE SEGURADO ESPECIAL'. Sem explicar quais dados, qual critério, qual peso."

"Isso viola a **IN 128/2022 do próprio INSS** — que exige análise e contraditório prévio antes do indeferimento. O órgão que editou a norma é o primeiro a descumpri-la. Regulador que edita a IN é o Regulado que automatiza o indeferimento suprimir o contraditório. Do poder-dever ao dever-poder."

*Aponta para o diagrama Regulador vs Regulado:*

"O que a segurada recebe é uma **caixa-preta**. Dados entram — CPF, CNIS, CadÚnico, geolocalização — e uma negativa sai. Sem rosto. Sem porquê. Sem pessoa. A opacidade algorítmica servindo à eficiência arrecadatória contra o direito fundamental. Este é o caso-âncora da nossa tese."

"No plano internacional, o espelho é o **SyRI** — o sistema holandês de detecção de fraude em benefícios sociais. Foi usado para cruzar dados e identificar 'risco de fraude' em bairros pobres, com alta concentração de imigrantes turcos e marroquinos. O Tribunal de Haia, em 2020, proibiu: violava o art. 8º da Convenção Europeia de Direitos Humanos — privacidade, finalidade, minimização, devido processo. Lá, um tribunal conteve a opacidade algorítmica do Estado. Aqui, a gente ainda está no estágio da denúncia."

"E em vez de só *falar* disso, a gente vai *mostrar*. Mas antes, deixa eu acrescentar duas camadas que considero decisivas."

---

## ATO 4 — MINHA CONTRIBUIÇÃO PROPEDÊUTICA (~2 min)

### SLIDE 30 · Propedêutica: literacia algorítmica + notícia humana

**Ana:**

"Quero acrescentar dois degraus que vêm **antes** do contraditório."

"O primeiro é a **literacia algorítmica**. A trabalhadora rural muitas vezes nem sabe que foi uma *máquina* que decidiu. Ela não faz ideia do que é 'inteligência artificial', 'viés de proxy', 'inferência'. Ora, não se contesta o que não se compreende. Empoderar não é só abrir um canal de recurso — é **traduzir** a decisão em linguagem que a pessoa entenda."

"Transparência não basta. Um portal pode ser transparente — publicar todos os dados, todos os critérios, todos os pesos — e ainda assim ser incompreensível para quem precisa contestar. Transparência é condição necessária, mas não suficiente. O que falta é **inteligibilidade**."

"O segundo degrau é uma tese normativa que proponho. Certas decisões podem até ser automatizadas — eu não sou contra a tecnologia. Mas a **comunicação** de uma decisão adversa a alguém em situação de vulnerabilidade — a negativa de um benefício, o corte de um auxílio, o indeferimento de uma aposentadoria — deveria, em tese, ser feita por **uma pessoa, não por uma máquina**. O humano no circuito não apenas na *decisão*, mas no **cuidado da comunicação**."

"Notificar um indeferimento por um app frio — 'NÃO COMPROVADA A QUALIDADE DE SEGURADO ESPECIAL' — a quem depende daquele benefício para comer é uma violência burocrática silenciosa. A dignidade do administrado também está em *como* ele é avisado. O Estado que se diz eficiente é o mesmo que comunica de forma desumana a quem mais precisa de cuidado. Isso é Regulador ⇄ Regulado no nível mais íntimo."

"E agora a gente mostra como isso vira ferramenta."

---

## ATO 5 — DEMONSTRAÇÃO (~4 min)

### SLIDES 31–33 · Protótipo + Demo

**Ana:**

"Nós construímos um protótipo. Ele se chama **Conselho de Contestação Algorítmica** e é um fork do llm-council, do Andrej Karpathy, adaptado para o contexto jurídico brasileiro."

"A ideia é simples. Imaginem a trabalhadora rural que teve a aposentadoria negada. Em vez de um parecer só — o parecer do INSS que diz 'indeferido' — quatro perspectivas jurídicas analisam o caso."

"Cada perspectiva é, na prática, uma das leituras que o Vinícius acabou de apresentar."

"Tem a **Defensoria Pública** — que carrega o artigo do Tavares. Contraditório prévio. Art. 5º, LV. A nulidade não se sana com recurso posterior. A IN 128/2022 foi descumprida pelo próprio INSS."

"Tem o **Cientista de Dados** — que carrega a explicabilidade. Viés de proxy. SHAP values. Feature importance. O modelo inferiu atividade urbana a partir de lacuna contributiva — mas lacuna em CNIS de trabalhador rural é a norma, não a exceção. O modelo penaliza a informalidade que deveria proteger."

"Tem o **Administrador Público** — que carrega Cristóvam e Hahn. Governança. A Lei 14.129, art. 6º, exige que decisões automatizadas sejam explicáveis. A notificação do Meu INSS não é uma explicação — é uma fórmula vazia. Faltou supervisão humana obrigatória, como exige o art. 20, §2º da LGPD."

"E tem o **Cidadão** — que carrega Salgado e Saito, Sarlet e Molinaro, e a nossa camada propedêutica. Exclusão digital — a negativa chega pelo Meu INSS, mas quem vive no campo, sem internet estável e sem letramento digital, precisa viajar até a agência só para entender o que houve. Literacia algorítmica — a pessoa nem sabe que foi uma máquina que decidiu. Notícia humana — ninguém ligou. Ninguém explicou. Foi um app."

*Transição para a demo:*

"O conselho funciona em três fases."

"**Fase 1:** cada conselheiro dá seu parecer. Quatro leituras independentes — e frequentemente conflitantes. A Defensoria fala em nulidade. O Cientista fala em viés de proxy. O Administrador fala em governança. O Cidadão fala em fome. Nenhum substitui o outro."

"**Fase 2:** os conselheiros se avaliam anonimamente. Eles ranqueiam os argumentos uns dos outros por proteção aos direitos do cidadão. Isso produz um ranking que torna visíveis as tensões — e o Administrador Público consistentemente fica em último lugar. O que já é um achado."

"**Fase 3:** um Relator sintetiza tudo num parecer final com fundamentação jurídica. Ele não substitui as quatro vozes — ele as organiza. E no fim, o sistema não decide pela pessoa. Ele **devolve a ela o contraditório que o Estado suprimiu**."

*Opera a demo — ou abre o fallback:*

"Vou mostrar."

*[Abre o Conselho. Clica 'INSS — Aposentadoria Rural Negada'. Navega Fase 1 → Fase 2 → Fase 3. Comenta os cards e o parecer final à medida que aparecem.]*

"Este protótipo é conceitual. Não é um produto comercial — é uma maquete acadêmica para discutir o que falta. Fala.BR e Conteste Aqui existem, mas nenhum deles explica o algoritmo ou gera estratégia jurídica. O valor está na integração crítica, não na invenção de cada peça isolada."

"Vinícius, o fecho."

---

## ATO 6 — FECHO (~2 min)

### SLIDE 33/34 · Tese final

**Ana:**

"O protótipo é a resposta prática à pergunta do início. A Administração 4.0 não fica democrática só por ser digital. Ela só é legítima quando a decisão pode ser **compreendida, explicada e contestada** — e isso vale com mais força justamente porque o Estado é, ao mesmo tempo, quem faz a regra e quem mais a descumpre."

**Vinícius:**

"A gente fecha com uma releitura constitucional dos institutos que atravessaram os quatro artigos."

"A **privacidade**, no ambiente digital, não é só o direito de ser deixado em paz — é o direito de saber quais dados o Estado tem sobre você, com que finalidade ele os usa, e de exigir a correção do que está errado. O art. 5º, LXXIX, tornou isso direito fundamental expresso. Mas direito fundamental sem enforcement é promessa."

"A **publicidade**, no governo digital, não se esgota em portal. É a obrigação de publicar em formato aberto, reutilizável, compreensível — e de não usar a classificação de sigilo como escudo contra o controle social. O art. 37, *caput*, da Constituição coloca a publicidade ao lado da legalidade e da moralidade. Não é item decorativo."

"O **contraditório**, na decisão automatizada, precisa ser prévio. Recurso posterior é paliativo. O art. 5º, LV, não foi escrito para o mundo analógico — foi escrito para qualquer mundo em que o Estado decida e o cidadão sofra. Se a máquina decide, a máquina precisa ser contestada."

"E a **motivação**, no ato administrativo digital, não pode ser uma fórmula padronizada. 'Inconsistência de dados', 'risco elevado', 'perfil incompatível' — isso não é motivação. É placeholder. A Lei 9.784/99, art. 50, exige motivação explícita, clara e congruente. Um algoritmo que produz 'indeferido' sem dizer por quê viola esse artigo tanto quanto um despacho manuscrito que só diz 'indefiro'."

"A Administração Pública digital está decidindo **melhor** — ou apenas decidindo **mais rápido**, com menos chance de compreensão, contestação e participação democrática?"

"Fica a pergunta. Obrigado."

---

## CAIXA DE MUNIÇÃO (para o debate)

**Robodebt (Austrália):** O governo australiano usou um algoritmo para calcular dívidas de benefícios sociais e emitir cobranças automáticas. Sem checagem humana. Resultado: centenas de milhares de cobranças indevidas, suicídios, dano social massivo. O algoritmo errou, e ninguém revisou. Hoje é estudo de caso global de falha de governança algorítmica.

**Juiz do TJ/MA:** De 80 para 969 sentenças usando IA. Decisões padronizadas, precedentes inexistentes (alucinação do modelo), fundamentação genérica. Quem edita a regra — o CNJ, com a Resolução 615/2025 — é o ramo que a viola. Regulador ⇄ Regulado no Judiciário.

**Palantir / Enter (unicórnio jurídico de IA):** O mercado de IA jurídica no Brasil cresce mais rápido que a regulação. O Estado contrata plataformas cujo código-fonte é segredo industrial. Isso é terceirização da discricionariedade administrativa. 'O protagonismo privado não exime o Estado' — mas o Estado está cada vez mais confortável sendo coadjuvante.

**SyRI (Holanda, Haia 2020):** O precedente internacional. O tribunal holandês proibiu o sistema de detecção de fraude que focava em bairros pobres e imigrantes. Violava privacidade, finalidade, minimização e devido processo. A sentença é um modelo de como o Judiciário pode conter a opacidade algorítmica do Executivo. **Lá, um tribunal conteve o Estado. Aqui, ainda estamos no estágio da denúncia.**

---

## MAPA RÁPIDO: slide → quem fala

| Slide | Quem | Conteúdo resumido |
|---|---|---|
| 01 | Vinícius | Capa, apresentação dos 4 artigos |
| 02 | Vinícius | Pergunta orientadora |
| 03 | Ana | Chave de leitura: Regulador ⇄ Regulado |
| 04 | Vinícius | Divisor Parte I |
| 05–08 | Vinícius | Salgado & Saito: privacidade, 3 dimensões, 4 gerações |
| 09 | Ana | ★ Nossa leitura I: ADI 6.387, persona Cidadão |
| 10–13 | Vinícius | Cristóvam & Hahn: Moore/Dunleavy/OCDE, INDA, 3 municípios |
| 14 | Ana | ★ Nossa leitura II: opacidade seletiva, persona Administrador |
| 15 | Vinícius | Síntese Parte I |
| 16 | Vinícius | Divisor Parte II |
| 17–19 | Vinícius | Sarlet & Molinaro: 5 campos, LGPD pré-big data |
| 20 | Ana | ★ Nossa leitura III: 251M CPFs, persona Cidadão |
| 21–24 | Vinícius | Tavares et al.: IA×algoritmo, 3 tipologias, explicabilidade |
| 24–25 | Ana | ★ Nossa leitura IV: INSS, Black Box, SyRI, anuncia Bloco 5 |
| 30 | Ana | Propedêutica: literacia algorítmica + notícia humana |
| 31–33 | Ana | Demo: 4 personas × 4 artigos, Fase 1→2→3 |
| 33/34 | Ana | Fecho: compreendida, explicada, contestada |
| 33/34 | Vinícius | Releitura constitucional + pergunta para debate |

---

*Script consolidado em 25 de maio de 2026. Para ser falado, não lido. Tempo total estimado: ~40 minutos de exposição.*
