import { test, expect } from '@playwright/test';

test.describe('Logout', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/index.html');
        await page.fill('#email', 'admin@crewly.com');
        await page.fill('#password', 'Admin1234');
        await page.click('button[type="submit"]');
        await page.waitForURL(/dashboard/);
    });

    test('logout redirige al login', async ({ page }) => {
        await page.click('#logout-btn');
        await expect(page).toHaveURL(/index/);
    });

    test('no se puede volver al dashboard tras logout', async ({ page }) => {
        await page.click('#logout-btn');
        await page.waitForURL(/index/);
        await page.goBack();
        await expect(page).not.toHaveURL(/dashboard/);
    });
});