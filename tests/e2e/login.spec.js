import { test, expect } from '@playwright/test';

test.describe('Login', () => {
    test('login con credenciales validas redirige al dashboard', async ({ page }) => {
        await page.goto('/index.html');

        await page.fill('#email', 'admin@crewly.com');
        await page.fill('#password', 'Admin1234');
        await page.click('button[type="submit"]');

        await expect(page).toHaveURL(/dashboard/);
    });

    test('login con credenciales incorrectas muestra error', async ({ page }) => {
        await page.goto('/index.html');

        await page.fill('#email', 'wrong@email.com');
        await page.fill('#password', 'WrongPass1');
        await page.click('button[type="submit"]');

        await expect(page.locator('#email-error')).toBeVisible();
    });

    test('campos vacios muestran errores de validacion', async ({ page }) => {
        await page.goto('/index.html');

        await page.click('button[type="submit"]');

        await expect(page.locator('#email-error')).toBeVisible();
        await expect(page.locator('#password-error')).toBeVisible();
    });
});