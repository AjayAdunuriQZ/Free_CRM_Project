import { test, expect } from '@playwright/test';
test('event creation in calendar', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
    await page.fill('input[name="password"]', 'N@ndu2308');
    await page.getByText('login').click();
    await expect(page.locator('text=Calendar')).toBeVisible();
    await page.getByRole('link', { name: ' Calendar' }).click();
    await page.locator('.rbc-row-bg > div:nth-child(3)').first().click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill('KT');
    await page.getByText('SelectImportantOpportunityOptionalCriticalMeetingSocialTime OffPrivate').click();
    await page.getByText('Meeting').click();
    await page.locator('div:nth-child(6) > div > .ui.field > .ui > input').first().click();
    await page.locator('.ui.active > input').fill('Free CRM');
    await page.locator('div:nth-child(8) > div:nth-child(2) > .ui.field > .ui > .search.icon').click();
    await page.locator('.ui.active > input').fill('ajay');
    await page.getByRole('option', { name: 'ajay kumar' }).first().click();
    await page.getByRole('button', { name: 'Save' }).click();
})