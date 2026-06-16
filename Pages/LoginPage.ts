import { Page } from '@playwright/test';
export class LoginPage {
    constructor(private page: Page) {}

    async navigateToLoginPage() {
        await this.page.goto('https://ui.freecrm.com/');
    }

    async login(email: string, password: string) {

        await this.page.fill('input[name="email"]', email);
         
        await this.page.fill('input[name="password"]', password);
        await this.page.getByText('login').click();
    }
}