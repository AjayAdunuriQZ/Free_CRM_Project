import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ContactsPage extends BasePage {
    readonly contactsMenu!: Locator;
    readonly createButton!: Locator;
    readonly firstNameTextbox!: Locator;
    readonly lastNameTextbox!: Locator;
    readonly saveButton!: Locator;

    constructor(page: Page) {
        super(page);
        this.contactsMenu = page.getByRole('link', { name: 'Contacts' });
        this.createButton = page.getByRole('button', { name: 'Create' });
        this.firstNameTextbox = page.locator('input[name="first_name"]');
        this.lastNameTextbox = page.locator('input[name="last_name"]');
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async opencontacts() {
        await this.contactsMenu.click();
    }

async createContact(firstName: string, lastName: string) {
    await this.createButton.click();
    await this.firstNameTextbox.fill(firstName);
    await this.lastNameTextbox.fill(lastName);
    await this.saveButton.click();
}
}