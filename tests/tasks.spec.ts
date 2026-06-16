import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://ui.freecrm.com/');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('nandinimodugu23@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('N@ndu2308');
    await page.getByText('Login').click();
    await page.getByRole('link', { name: ' Tasks' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill('Project Demo');
    await page.getByRole('listbox').filter({ hasText: /^Nandini Modugu$/ }).click();
    await page.getByRole('alert').filter({ hasText: 'Nandini Modugu' }).click();
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('xyz');
    await page.getByRole('option', { name: 'XYZ', exact: true }).click();
    await page.getByText('SelectGeneral SupportCustomer').click();
    await page.getByText('Technical Support').click();
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('ajay');
    await page.getByRole('option', { name: 'Ajay', exact: true }).click();
    await page.getByText('SelectLowNormalHigh').click();
    await page.getByRole('option', { name: 'High' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
});