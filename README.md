# Fullstack challenge
Projeto feito como desafio tecnico para a empresa Plataforma A+.

## Utilizado neste projeto
javascript
React
Node
MySQL
Sequelize

## Instalação
Acesse cada uma das pastas de back-end e front-end e execute:

```bash
npm install
```
## Criando banco de dados Sequelize
Primeiramente configure seu .env com as variaveis 
MYSQL_USER, MYSQL_PASSWORD, HOSTNAME, SCHEMA.

Para criar o banco de dados(BD) execute: 
```bash
npx sequelize db:create
```

criar as tabelas:
```bash
npx sequelize db:migrate
```

popular o BD:
```bash
npx sequelize db:seed:all
```

para excluir o BD:
```bash
npx sequelize db:drop
```