# Desafio Técnico - Frontend Cirrus

## Projeto em cumprimento ao desafio Alterdada. Trata-se da aplicação de nível INICIANTE.

### Bibliotecas do projeto

- eslint - Padronização do código.
- editorconfig - Padronização do código.
- prettier - Padronização do código.
- react-dom - Fornece classes para gerenciar rotas, histórico de navegação, redirecionamento e outros.
- unform - O unform é uma biblioteca que auxilia no gerenciamento do estado do formulário, sem a necessidade
de criar um estado para cada input, diminuindo bastante o número de renderização do componente.
- axios - Biblioteca para conexão com o backend.
- polished - Biblioteca com diversos recursos pra estilização. Nesse projeto foi utilizada apenas para
gerar um pequeno sombreamento no hover do componente.
- react-icons - Biblioteca para fornecer icones.
- styled-components - Biblioteca base desse projeto para estilização dos componentes. Ao meu ver, essa biblioteca
deixa o código css muito mais limpo e fácil de ler.
- Yup - Biblioteca utilizada para validação dos campos dos formulários. Facilita muito a validação.

## Estrutura de pastas e arquivos do projeto

├── README.md
├── package.json
├── prettier.config.js
├── public
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── login-background.png
│   │   └── register-background.png
│   ├── components
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Input
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Tooltip
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── hook
│   │   └── AuthContext.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── Dashboard
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Login
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Register
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── react-app-env.d.ts
│   ├── routes
│   │   ├── Route.tsx
│   │   └── index.tsx
│   ├── services
│   │   └── api.ts
│   ├── setupTests.ts
│   ├── styles
│   │   └── global.ts
│   └── utils
│       └── getValidationErros.ts
├── tsconfig.json
└── yarn.lock

## Funcionalidades desenvolvidas

- Tela de login e cadastro funcional
- Ao realizar o cadastro, já é possível realizar o login na aplicação
- Ao realizar o login, o usuário terá um painel contendo todos os tíkets abertos por ele (se houverem).

Todas as telas após o login na aplicação estão em volta de um contexto, para não ocorrer de um usuário não
autorizado realizar login na aplicação.

Não consegui em tempo hábil desenvolver as outras funcionalidades no frontend.

## Como executar o projeto

- Clone o projeto
- Execute o comando yarn ou npm install (esse projeto foi desenvolvido com yarn)
- Rode o comando yarn start (o projeto está sendo gerado na porta 3000);
- Para criar um novo usuário, o bakend deverá estar rodando (está configurado para subir na porta 3333)
- Ao criar um usuário, já possível realizar o login na aplicação

## Dúvidas
Caso tenha alguma dúvida entre em contato pelo e-mail: dias.dsn.cir@alterdata.com.br
