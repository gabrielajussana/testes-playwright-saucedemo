# 🧪 Playwright Test Automation - Sauce Demo

![Playwright](https://img.shields.io/badge/Playwright-2.5.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-✔-yellow)

Projeto de automação de testes E2E para o [Sauce Demo](https://www.saucedemo.com/) utilizando Playwright.

## Pré-requisitos

- Node.js 18+
- npm 9+
- Git
- Navegadores (Chromium, Firefox, WebKit)

## Instalação

1. Clone o repositório

```bash
git clone https://github.com/gabrielajussana/testes-playwright-saucedemo.git
cd testes-playwright-saucedemo
```

2. Instale as dependências:

```bash
npm install
```
3. Instale os browsers do Playwright:

```bash
npx playwright install
```

## Executando os Testes

1. Todos os testes:

```bash
npx playwright test
```
2. Com relatório Allure:

```bash
npx playwright test --reporter=allure-playwright
allure generate allure-results --clean -o allure-report
allure open allure-report
```
## Estrutura do Projeto

```
testes-playwright-saucedemo/
├── .github/
│   └── workflows/       # CI/CD pipelines
├── src/
│   ├── pages/           # Page Objects
│   │   ├── login.page.ts
│   │   ├── products.page.ts
│   │   └── cart.page.ts
│   └── tests/           # Test Cases
│       ├── login.test.ts
│       ├── products.test.ts
│       └── checkout.test.ts
├── playwright.config.ts # Configuração do Playwright
└── package.json
```