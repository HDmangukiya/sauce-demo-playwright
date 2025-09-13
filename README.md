# Sauce Demo – Playwright Test Automation  

This repository contains **end-to-end UI automation tests** for the [Sauce Demo](https://www.saucedemo.com/) application.  
It is built using **[Playwright](https://playwright.dev/)** with **TypeScript** and follows **Page Object Model (POM)** for scalability and maintainability.  



## Steps  

### 1. Clone the repo  

```bash
git clone https://github.com/your-org/sauce-demo-playwright.git
cd sauce-demo-playwright
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

# Running Tests
## Run all tests (default, headless mode)
```bash
npm run test
```

## Run tests in headed mode (browser visible)
```bash
npm run test:headed
```

## Run with a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Reports
Generate && open HTML report
```bash
npm run test:report
```


If no report is found, make sure you’ve run tests with:

```bash
npx playwright test --reporter=html
```

# Code Quality
## Run ESLint (check code quality)
```bash
npm run lint
```


Initialize ESLint config for the first time:

```bash
npm init @eslint/config
```

## Run Prettier (fomrat code)
```bash
npm run format
```


# Design Principles

```bash
This project follows:

Page Object Model (POM) – All locators and actions are abstracted into pages/.

Feature-based test structure – Tests grouped under tests/login, tests/cart, etc.

Data-driven testing – Test data separated in files like loginData.ts, cartData.ts.

Scalability – New features can be tested by:

Creating a new Page Object in pages/

Adding test data in a .ts file under tests/featureName

Writing corresponding .spec.ts tests
```

# Future Improvements

```bash
Cross-browser and cross-platform testing in CI.

Parallel test execution for faster results.

Visual regression testing with Playwright snapshots.

API + UI hybrid tests for faster validation.

Accessibility testing with axe-playwright.
```


## Extrabasic Commands
```bash
Run npm init @eslint/config to generate .eslintrc.json.

run tests in Chrome  ~  npx playwright test --project=chromium --headed

screenshots/videos of failed tests location ~ Check the test-results/ folder.
```