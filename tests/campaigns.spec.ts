import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { CampaignsPage } from '../Pages/campaigns.page';
import data from '../testdata/crmdata.json';

test('create campaign', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const campaignsPage = new CampaignsPage(page);
    await loginPage.openCRM();
    await loginPage.login(data.login.username, data.login.password);
    await campaignsPage.openCampaigns();
    await campaignsPage.createCampaign(data.Campaigns["Campaign Name"]);
});