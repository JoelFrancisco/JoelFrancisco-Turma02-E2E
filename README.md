# Playwright E2E

## GitHub Actions

[![Build and Tests](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_playwright-e2e&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_playwright-e2e)

## Getting Started

In order to execute this project you must follow the steps below:

1. Install [Node JS](https://nodejs.org/) (version >= 20.x)
1. Run `npm i --save-dev` to install all the project dependencies
1. Run `npx playwright install` to install the browsers used by Playwright
1. Run `npm run ci` to execute the entire test suite
1. Run `npm run show-report` to visualize the reports

All execution artifacts can be found in `./artifacts`, if you want to remove these files run `npm run clean`.

## Project Structure
</br>
<ul>
    <li>Scenarios: Test scenario mapping</li>
    <li>Support: Project structure files
        <ul>
            <li>Elements: Mapping the elements of each screen</li>
            <li>Fixtures: Data configuration files</li>
            <li>Pages: Logic used to perform actions in tests</li>
        </ul>
    </li>
</ul>


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