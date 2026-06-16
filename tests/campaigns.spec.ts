import { test, expect } from '@playwright/test';
test('deal creation', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
    await page.fill('input[name="password"]', 'N@ndu2308');
    await page.getByText('login').click();
    await expect(page.locator('text=Home')).toBeVisible();
    await page.getByRole('link', { name: ' Campaigns' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.locator('input[name="name"]').fill('app launch');
    await page.getByRole('button', { name: 'Save' }).click();
});