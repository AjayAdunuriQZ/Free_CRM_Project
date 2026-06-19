import { Page } from '@playwright/test';
export class BasePage {
    constructor(protected page: Page) { }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async takeScreenshot(filename: string) {
        await this.page.screenshot({ path: `screenshots/${filename}.png` });
    }
    async wait(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }
}
