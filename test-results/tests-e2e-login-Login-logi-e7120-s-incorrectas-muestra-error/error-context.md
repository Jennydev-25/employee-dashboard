# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\login.spec.js >> Login >> login con credenciales incorrectas muestra error
- Location: tests\e2e\login.spec.js:14:5

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
  3  | test.describe('Login', () => {
  4  |     test('login con credenciales validas redirige al dashboard', async ({ page }) => {
  5  |         await page.goto('/index.html');
  6  | 
  7  |         await page.fill('#email', 'admin@crewly.com');
  8  |         await page.fill('#password', 'Admin1234');
  9  |         await page.click('button[type="submit"]');
  10 | 
  11 |         await expect(page).toHaveURL(/dashboard/);
  12 |     });
  13 | 
  14 |     test('login con credenciales incorrectas muestra error', async ({ page }) => {
> 15 |         await page.goto('/index.html');
     |                    ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  16 | 
  17 |         await page.fill('#email', 'wrong@email.com');
  18 |         await page.fill('#password', 'WrongPass1');
  19 |         await page.click('button[type="submit"]');
  20 | 
  21 |         await expect(page.locator('#email-error')).toBeVisible();
  22 |     });
  23 | 
  24 |     test('campos vacios muestran errores de validacion', async ({ page }) => {
  25 |         await page.goto('/index.html');
  26 | 
  27 |         await page.click('button[type="submit"]');
  28 | 
  29 |         await expect(page.locator('#email-error')).toBeVisible();
  30 |         await expect(page.locator('#password-error')).toBeVisible();
  31 |     });
  32 | });
```