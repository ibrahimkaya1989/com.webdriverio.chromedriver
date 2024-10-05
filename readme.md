## Installation
```bash
npm init -y
npm install --save-dev @wdio/cli wdio-cucumber-framework @wdio/local-runner @wdio/allure-reporter allure-commandline
npx wdio config

mkdir -p features/step-definitions
```

## Preparation
```bash
npm install
```

## Running
```bash
npx wdio run wdio.conf.js
```

## Allure Reporter
```bash
allure serve .\allure-results\
allure generate .\allure-results\ --clean -o allure-report
allure open allure-report
```