# mifx-test-assesment

How To Run API Tests:
Pre requirement:

- k6 installed

```bash
cd api-reqres
npm install
k6 run -e STAGE=dev api-reqres/run-all-test.js
```

How To Run UI Tests:
Pre requirement:

- node installed
- playwright installed

```bash
cd playwright-ui-saucedemo
npm install
npx playwright install

npx playwright test tests/LoginWithValidCredential.spec.ts --ui
npx playwright test tests/LoginWithInvalidPassword.spec.ts --ui
```
