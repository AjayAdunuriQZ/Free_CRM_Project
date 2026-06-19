import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import data from '../testdata/crmdata.json';
// If ../Pages/ContactsPage module is missing, provide a minimal local fallback
class ContactsPage {
    readonly page: any;
    constructor(page: any) {
        this.page = page;
    }
    async opencontacts() {
        await this.page.getByRole('link', { name: ' Contacts' }).click();
    }
    async createContact(firstName: string, lastName: string) {
        await this.page.getByRole('button', { name: 'Create' }).click();
        await this.page.locator('input[name="first_name"]').fill(firstName);
        await this.page.locator('input[name="last_name"]').fill(lastName);
        await this.page.getByRole('button', { name: 'Save' }).click();
    }
}
test('contact creation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const contactsPage = new ContactsPage(page);
    await loginPage.openCRM();
    await loginPage.login(data.login.username, data.login.password);

    await contactsPage.opencontacts();

    await contactsPage.createContact(data.Contact.firstName, data.Contact.lastName);
});
//     await page.goto("https://ui.freecrm.com/");
//     await page.fill('input[name="email"]', 'nandinimodugu23@gmail.com');
//     await page.fill('input[name="password"]', 'N@ndu2308');
//     await page.getByText('login').click();
//     await expect(page.locator('text=Home')).toBeVisible();

//     await page.getByRole('link', { name: ' Contacts' }).click();
//     await page.getByRole('button', { name: 'Create' }).click();
//     await page.locator('input[name="first_name"]').click();
//     await page.locator('input[name="first_name"]').fill('ajay');
//     await page.locator('input[name="last_name"]').click();
//     await page.locator('input[name="last_name"]').fill('kumar');
//     await page.getByRole('textbox').nth(4).click();
//     await page.getByRole('textbox').nth(4).fill('Qualizeal');
//     await page.getByRole('textbox').nth(4).press('Enter');
//     await page.getByText('SelectNewActiveInactiveOn').click();
//     await page.getByRole('option', { name: 'Active', exact: true }).click();
//     await page.getByRole('textbox', { name: 'Home, Work, Mobile...' }).click();
//     await page.getByRole('textbox', { name: 'Number' }).click();
//     await page.getByRole('textbox', { name: 'Number' }).fill('98765 43210');
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.getByRole('link', { name: ' Home' }).click();
// });