import { test, expect } from '@playwright/test';
test('contact creation', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
    await page.fill('input[name="password"]', 'N@ndu2308');
    await page.getByText('login').click();
    await expect(page.locator('text=Home')).toBeVisible();

    await page.getByRole('link', { name: ' Contacts' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.locator('input[name="first_name"]').click();
    await page.locator('input[name="first_name"]').fill('ajay');
    await page.locator('input[name="last_name"]').click();
    await page.locator('input[name="last_name"]').fill('kumar');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('Qualizeal');
    await page.getByRole('textbox').nth(4).press('Enter');
    await page.getByText('SelectNewActiveInactiveOn').click();
    await page.getByRole('option', { name: 'Active', exact: true }).click();
    await page.getByRole('textbox', { name: 'Home, Work, Mobile...' }).click();
    await page.getByRole('textbox', { name: 'Number' }).click();
    await page.getByRole('textbox', { name: 'Number' }).fill('98765 43210');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: ' Home' }).click();
});