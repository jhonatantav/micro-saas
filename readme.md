### Micro-SaaS de Gerenciamento de Projetos

Este é um projeto de Micro-SaaS que permite o gerenciamento de projetos, com suporte a multi-tenant, ou seja, cada usuário/cliente tem um ambiente isolado para gerenciar seus próprios projetos. O sistema foi desenvolvido utilizando um monorepo que engloba o back-end em Fastify e o front-end em Next.js, incluindo a funcionalidade de login via GitHub e criação de conta.

## Funcionalidades Principais

Criação de contas
Login via GitHub (OAuth)
Gerenciamento de múltiplos projetos
Suporte a multi-tenant (cada usuário tem seus dados isolados)
Monorepo com integração de front-end e back-end

## Tecnologias Utilizadas

# Back-end

Fastify: Framework web leve e rápido para Node.js, utilizado para o desenvolvimento da API RESTful.
Prisma: ORM utilizado para a comunicação com o banco de dados.
JWT: Utilizado para autenticação de usuários.
OAuth2 (GitHub): Para vinculação da conta do usuário com o GitHub e autenticação.

# Front-end

Next.js: Framework React com renderização híbrida (SSR/CSR), usado para construir a interface de usuário.
TailwindCSS: Utilizado para estilização rápida e consistente.
React Query: Gerenciamento de estados de dados no lado cliente.

# Monorepo

TurboRepo: Utilizado para gerenciar o monorepo, facilitando o desenvolvimento conjunto do front-end e back-end.

# Arquitetura

Este projeto segue uma arquitetura de micro-serviços dentro de um monorepo, separando claramente o back-end (API) do front-end (interface).

/root
│
├── /apps
│ ├── /backend # Código do back-end (Fastify)
│ └── /frontend # Código do front-end (Next.js)
│
├── /packages # Pacotes compartilhados entre back-end e front-end
│
└── turbo.json # Configuração do monorepo com TurboRepo

# API

A API é construída em Fastify e exposta em endpoints RESTful para realizar operações como:

Criação e gerenciamento de contas.
Criação e gerenciamento de projetos.
Autenticação via GitHub (OAuth).
Gerenciamento de tenants (isolamento de usuários e projetos).

# Front-end

O front-end é construído utilizando Next.js com as seguintes características:

Páginas estáticas e dinâmicas com SSR (Server-Side Rendering) para melhor performance e SEO.
Formulários de login e cadastro.
Dashboard de gerenciamento de projetos.

# Requisitos

Node.js >= 20
Banco de Dados PostgreSQL
Conta GitHub para autenticação OAuth
Docker (opcional, para facilitar o setup do ambiente)

# Contribuição

Se você quiser contribuir com o projeto, siga estas etapas:

Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
Envie a branch (git push origin feature/nome-da-feature).
Abra um Pull Request.

# Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
