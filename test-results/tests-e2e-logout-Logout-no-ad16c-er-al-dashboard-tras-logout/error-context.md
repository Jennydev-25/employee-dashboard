# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\logout.spec.js >> Logout >> no se puede volver al dashboard tras logout
- Location: tests\e2e\logout.spec.js:17:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/index.html", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Logout', () => {
  4  |     test.beforeEach(async ({ page }) => {
> 5  |         await page.goto('/index.html');
     |                    ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  6  |         await page.fill('#email', 'admin@crewly.com');
  7  |         await page.fill('#password', 'Admin1234');
  8  |         await page.click('button[type="submit"]');
  9  |         await page.waitForURL(/dashboard/);
  10 |     });
  11 | 
  12 |     test('logout redirige al login', async ({ page }) => {
  13 |         await page.click('#logout-btn');
  14 |         await expect(page).toHaveURL(/index/);
  15 |     });
  16 | 
  17 |     test('no se puede volver al dashboard tras logout', async ({ page }) => {
  18 |         await page.click('#logout-btn');
  19 |         await page.waitForURL(/index/);
  20 |         await page.goBack();
  21 |         await expect(page).not.toHaveURL(/dashboard/);
  22 |     });
  23 | });
```