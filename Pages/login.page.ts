import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    readonly emailTextbox;
    readonly passwordTextbox;
    readonly loginButton;
    constructor(page: Page) {
        super(page);
        this.emailTextbox = this.page.locator('input[name="email"]');
        this.passwordTextbox = this.page.locator('input[name="password"]');
        this.loginButton = this.page.getByText('Login');
    }
    async openCRM() {
        await this.navigateTo('https://ui.freecrm.com/');
    }
    async login(email: string, password: string) {
        await this.emailTextbox.fill(email);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }
}