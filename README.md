# Sistama de abertura de tickets

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

```
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
```

## Exemplos do projeto

#### Tela de login
![login](https://user-images.githubusercontent.com/55066007/98037323-25e92d00-1dfa-11eb-8d88-1a1797d82a7b.PNG)

#### Dashboard da aplicação
![Dashboard](https://user-images.githubusercontent.com/55066007/98037373-37cad000-1dfa-11eb-8acf-e62a3e5593e6.PNG)

#### Cadastro de usuário
![Criar](https://user-images.githubusercontent.com/55066007/98037351-300b2b80-1dfa-11eb-9cb6-08fc7c0167af.PNG)

#### Cadastro de tickets
![CriarTicket](https://user-images.githubusercontent.com/55066007/98037375-37cad000-1dfa-11eb-9d9f-5d762046214d.PNG)

#### Edição de tickets
![Editar](https://user-images.githubusercontent.com/55066007/98037403-42856500-1dfa-11eb-8edf-69bfe32655e8.PNG)


## Como executar o projeto

- Clone o projeto
- Execute o comando yarn ou npm install (esse projeto foi desenvolvido com yarn)
- Rode o comando yarn start (o projeto está sendo gerado na porta 3000);
- Para criar um novo usuário, o bakend deverá estar rodando (está configurado para subir na porta 3333)
- Ao criar um usuário, já possível realizar o login na aplicação
