import { test } from '@playwright/test';

test('Reports page placeholder', async ({ page }) => {
  await page.goto('https://ui.freecrm.com/');
});