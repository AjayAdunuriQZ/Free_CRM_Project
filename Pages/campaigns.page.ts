import { Locator, Page } from 'playwright/test';
import { BasePage } from './base.page';

export class CampaignsPage extends BasePage {
    readonly campaignsMenu: Locator;
    readonly createButton: Locator;
    readonly campaignNameTextbox: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        super(page);
        this.campaignsMenu = page.getByRole('link', { name: 'Campaigns' });
        this.createButton = page.getByRole('button', { name: 'Create' });
        this.campaignNameTextbox = page.locator('input[name="name"]');
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async openCampaigns() {
        await this.campaignsMenu.click();
    }

    async createCampaign(campaignName: string) {
        await this.createButton.click();
        await this.campaignNameTextbox.fill(campaignName);
        await this.saveButton.click();
    }
}

