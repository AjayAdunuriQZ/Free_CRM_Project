import { test, expect } from '@playwright/test';
test('company creation', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
    await page.fill('input[name="password"]', 'N@ndu2308');
    await page.getByText('login').click();
    await expect(page.locator('text=Home')).toBeVisible();
    await page.getByRole('link', { name: ' Cases' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill('case_103');
    await page.getByRole('listbox').filter({ hasText: /^Nandini Modugu$/ }).click();
    await page.getByRole('alert').filter({ hasText: 'Nandini Modugu' }).click();
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('xyz');
    await page.getByRole('option', { name: 'XYZ' }).nth(1).click();
    await page.getByText('SelectGeneral SupportCustomer').click();
    await page.getByText('Technical Support').click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('nan');
    await page.getByText('Nandini Modugu').nth(3).click();
    await page.getByText('SelectLowNormalHigh').click();
    await page.getByRole('option', { name: 'High' }).click();
    await page.getByText('CancelSave').click();
    await page.locator('body').press('ControlOrMeta+r');
})