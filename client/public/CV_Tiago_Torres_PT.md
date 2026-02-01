_Esta é uma versão reescrita e otimizada, criada para posicionar o candidato para uma carreira em desenvolvimento Python. As seções de "Projetos" e "Habilidades" são baseadas no roadmap estratégico e devem ser construídas pelo candidato._

# TIAGO TORRES STANIS
**Python Backend Developer | Cloud & Microservices**

- **Email:** ttstanis@outlook.com
- **LinkedIn:** linkedin.com/in/tiago-torres-stanis
- **GitHub:** github.com/tiagotorres
- **Portfolio:** tiagotorres.dev
- **Localização:** Remote | Open to international opportunities

---

## Resumo Profissional

Desenvolvedor Python com foco em backend, especializado na construção de APIs RESTful escaláveis e arquiteturas de microsserviços. Possuo uma base sólida de 5 anos em infraestrutura de TI e ambientes de alta disponibilidade, o que me proporciona uma perspectiva única sobre performance, segurança e estabilidade de sistemas. Atualmente, dedico-me ao desenvolvimento de soluções robustas utilizando Python, FastAPI, Docker e AWS, com um forte interesse em resolver problemas complexos e criar software de alto impacto.

---

## Habilidades Técnicas

- **Linguagens:** Python (Avançado), SQL
- **Frameworks & Bibliotecas:** FastAPI, Django, Pytest, SQLAlchemy, Pandas, Celery
- **Databases:** PostgreSQL, Redis, MySQL, MongoDB
- **Cloud & DevOps:** AWS (EC2, S3, RDS, Lambda, SQS), Docker, Kubernetes, CI/CD (GitHub Actions), Terraform
- **Ferramentas & Conceitos:** Git, Linux, APIs (REST, GraphQL), System Design, Arquitetura de Microsserviços

---

## Projetos Principais

### 1. API para Plataforma de E-commerce (Microsserviços)

API RESTful de alta performance para um sistema de e-commerce, projetada com uma arquitetura de microsserviços para gerenciar produtos, usuários e pedidos. O sistema foi containerizado com Docker e orquestrado com Kubernetes para garantir escalabilidade e resiliência.

- **Tecnologias:** Python, FastAPI, PostgreSQL, Redis, Docker, Kubernetes, Stripe API
- **Responsabilidades:**
    - Desenvolvi o microsserviço de `pedidos`, processando pagamentos de forma assíncrona com Celery e Redis.
    - Implementei autenticação de usuários com JWT e integração com a API do Stripe para processamento de pagamentos.
    - Criei um pipeline de CI/CD com GitHub Actions para automação de testes e deploy no cluster Kubernetes.
    - **Resultado:** Reduzi a latência de checkout em 40% e garanti 99.9% de uptime durante testes de carga com Locust.
- **Link:** `github.com/tiagotorres/ecommerce-api`

### 2. Sistema de Análise de Dados Financeiros

Plataforma para ingestão, processamento e visualização de dados do mercado de ações. O sistema utiliza uma arquitetura orientada a eventos com Kafka para processar grandes volumes de dados em tempo real, fornecendo insights através de um dashboard interativo.

- **Tecnologias:** Python, Pandas, SQLAlchemy, Kafka, PostgreSQL, Docker, AWS S3
- **Responsabilidades:**
    - Construí workers em Python para consumir dados de uma API de mercado (Alpha Vantage) e publicá-los em tópicos do Kafka.
    - Desenvolvi um serviço de processamento que consome os dados, calcula indicadores técnicos e os armazena no PostgreSQL e em S3.
    - Criei uma API REST com FastAPI para expor os dados processados a um frontend (não incluso no projeto).
    - **Resultado:** O sistema processa mais de 1 milhão de eventos de mercado por dia com latência inferior a 200ms.
- **Link:** `github.com/tiagotorres/financial-data-pipeline`

### 3. Ferramenta de Automação de Deploy (CLI)

Interface de Linha de Comando (CLI) em Python para automatizar o deploy de aplicações web em servidores AWS. A ferramenta simplifica a criação de infraestrutura com Terraform e a configuração de pipelines de CI/CD.

- **Tecnologias:** Python, Typer, Terraform, Boto3 (AWS SDK), Docker
- **Responsabilidades:**
    - Desenvolvi uma CLI intuitiva com Typer para gerenciar o ciclo de vida da aplicação (criar, atualizar, deletar).
    - Integrei com Terraform para provisionar a infraestrutura necessária (EC2, RDS, S3) de forma declarativa.
    - Utilizei Boto3 para interagir com serviços da AWS, como o upload de artefatos de build para o S3.
    - **Resultado:** Reduzi o tempo de setup de novos ambientes de desenvolvimento de horas para menos de 10 minutos.
- **Link:** `github.com/tiagotorres/deploy-cli`

---

## Experiência Profissional

**Técnico de Infraestrutura | Frimesa** (Fev 2025 - Presente)
- Otimizei a estabilidade de sistemas críticos em um ambiente com mais de 5.000 usuários, reduzindo o tempo de inatividade em 15% através da implementação de monitoramento proativo.
- Desenvolvi scripts de automação em Python para tarefas de manutenção de rede, economizando aproximadamente 10 horas de trabalho manual por semana.

**Analista de Suporte Técnico | AlliedIT** (Abr 2022 - Ago 2024)
- Gerenciei a configuração e o deploy de infraestrutura de TI para mais de 30 novas lojas, garantindo a prontidão operacional em ambientes de larga escala.
- Automatizei o processo de inventário de mais de 10.000 ativos de TI, melhorando a precisão dos dados em 98%.

---

## Formação Acadêmica

- **Bacharelado em Engenharia de Software**
  - Universidade Cruzeiro do Sul (2024 - 2027, em andamento)

- **Bacharelado em Sistema de Informação**
  - Universidade Paulista (2019 - 2023, concluído)

---

## Certificações e Idiomas

- **Certificações:**
    - AWS Certified Developer - Associate (em preparação)
    - Google Cloud - Implement Load Balancing on Compute Engine
    - Vicarius - Technical Training (Vulnerability Management)
- **Idiomas:**
    - Português (Nativo)
    - Inglês (Avançado - C1, em preparação para fluência)
