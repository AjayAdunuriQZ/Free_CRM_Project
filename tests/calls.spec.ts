import { test, expect } from '@playwright/test';
test('company creation', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
    await page.fill('input[name="password"]', 'N@ndu2308');
    await page.getByText('login').click();
    await expect(page.locator('text=Home')).toBeVisible();
    await page.getByRole('link', { name: ' Calls' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByText('SelectCallConferenceSkypeGoogle Meet').click();
    await page.getByRole('option', { name: 'Conference' }).click();
    await page.getByText('SelectF.Y.IImportantUrgentNo').click();
    await page.getByText('Important').click();
    await page.locator('form').click();
    await page.locator('div:nth-child(6) > div > .ui.field > .ui > input').first().click();
    await page.locator('.ui.active > input').click();
    await page.locator('.ui.active > input').fill('CRM');
    await page.getByRole('option', { name: 'CRM upgrader' }).click();
    await page.locator('div:nth-child(7) > div > .ui.field > .ui > input').click();
    await page.locator('.ui.active > input').fill('D');
    await page.getByText('Project Demo').first().click();
    await page.getByRole('textbox', { name: 'Number' }).click();
    await page.getByRole('textbox', { name: 'Number' }).fill('98745 6123');
    await page.locator('div:nth-child(6) > div:nth-child(2) > .ui.field > .ui > input').click();
    await page.locator('.ui.active > input').fill('CASE');
    await page.getByText('case_103').click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();

})