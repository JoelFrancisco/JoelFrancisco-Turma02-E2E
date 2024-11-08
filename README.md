# Trabalho 03 Automação de testes - Testes de E2E 

## Github Actions

[![Build and Tests](https://github.com/JoelFrancisco/JoelFrancisco-Turma02-E2E/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/JoelFrancisco/JoelFrancisco-Turma02-E2E/actions/workflows/node.js.yml)

O projeto possui um job no github actions para a execução dos testes em pipeline.

## Sobre o projeto

O projeto foi desenvolvido como o segundo trabalho da disciplina de Automação de Testes do curso de Engenharia de Software - SATC 

O objetivo era aprender o uso de testes de API com o framework Playwright, uma poderosa ferramenta para testes E2E em typescript.

## Pré requisitos para execução

- Nodejs versão >= 20.x
    (https://nodejs.org/en/download/package-manager/current)

## Como executar

Instale as dependências:

```
npm install
```

Instale os Browsers utilizados pelo Playwright

```
npx playwright install
```

Rode os testes:

```
npm run ci
```

Os artefatos gerados podem ser encontrados em ./output e podem ser removidos com:

```
npm run clean
```

## Feito por

**Criado por:** Joel Francisco da Silva Filho

Com base no reposítorio fornecido pelo professor Leandro Ugioni, disponível em: https://github.com/ugioni/playwright-e2e