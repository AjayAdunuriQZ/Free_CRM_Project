import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

if (!EMAIL || !PASSWORD) {
    throw new Error('EMAIL and PASSWORD must be defined in environment variables');
}

test('login test', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', EMAIL);
    await page.fill('input[name="password"]', PASSWORD);
    await page.getByText('login').click();
    await expect(page.locator('text=home')).toBeVisible();
})


test('invalidlogin test with wrong password', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', EMAIL);
    await page.fill('input[name="password"]', 'N@ndu');
    await page.getByText('login').click();
    await expect(page.locator('text=something went wrong')).toBeVisible();
})
test('invalidlogin test with wrong email', async ({ page }) => {
    await page.goto("https://ui.freecrm.com/");
    await page.fill('input[name="email"]', 'wrongemail@gmail.com');
    await page.fill('input[name="password"]', PASSWORD);
    await page.getByText('login').click();
    await expect(page.locator('text=something went wrong')).toBeVisible();
})
