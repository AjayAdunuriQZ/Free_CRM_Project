import { test, expect } from '@playwright/test';
test('deal creation', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
    await page.fill('input[name="password"]', 'N@ndu2308');
    await page.getByText('login').click();
    await expect(page.locator('text=Home')).toBeVisible();
    await page.getByRole('link', { name: ' Email' }).click();
    await page.getByRole('button', { name: 'Connect email account' }).click();
    await page.getByText('My Company').click();
    await page.getByText('Change Password').click();
    await page.getByText('Outgoing Mail').click();
    await page.getByText('Incoming Mail').click();
    await page.getByText('My Number').click();
    await page.getByText('Google Account').click();
    await page.getByText('WhatsApp').click();
    await page.getByText('Zapier').click();
    await page.getByText('Docusign').click();
    await page.getByRole('link', { name: ' Email' }).click();
})
