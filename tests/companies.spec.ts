import { test, expect } from '@playwright/test';
test('company creation', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
    await page.fill('input[name="password"]', 'N@ndu2308');
    await page.getByText('login').click();
    await expect(page.locator('text=Home')).toBeVisible();
    await page.getByRole('link', { name: ' Companies' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('XYZ');
    await page.getByRole('textbox', { name: 'Number' }).click();
    await page.getByRole('textbox', { name: 'Number' }).fill('4561 23789');
    await page.locator('input[name="num_employees"]').click();
    await page.locator('input[name="num_employees"]').fill('333');
    await page.getByText('SelectLowMediumHigh').click();
    await page.getByRole('option', { name: 'High' }).click();
    await page.getByText('SelectAdReferralCustomerPartnerEventInternetWalk inCall inEmailWeb ServiceImport').click();
    await page.getByRole('option', { name: 'Partner' }).click();
    await page.getByText('SelectNewActiveInactiveOn').click();
    await page.getByRole('option', { name: 'Active', exact: true }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('button:nth-child(11)').click();
    await page.getByRole('button', { name: 'Delete' }).click();
})