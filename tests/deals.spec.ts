import { test, expect } from '@playwright/test';
test('deal creation', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
    await page.fill('input[name="password"]', 'N@ndu2308');
    await page.getByText('login').click();
    await expect(page.locator('text=Home')).toBeVisible();
    await page.getByRole('link', { name: ' Deals' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill('ABC');
    await page.getByRole('listbox').filter({ hasText: /^Nandini Modugu$/ }).click();
    await page.getByRole('option', { name: 'Nandini Modugu' }).click();
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('textbox').nth(3).fill('L');
    await page.getByRole('option', { name: 'Laptop' }).click();
    await page.getByRole('button', { name: 'Public' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('xy');
    await page.getByRole('option', { name: 'XYZ' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('button:nth-child(9)').click();
    await page.getByRole('button', { name: 'Delete' }).click();

})