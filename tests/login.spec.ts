import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

import data from '../testdata/crmdata.json';

test('login test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.openCRM();
    await loginPage.login(data.login.username, data.login.password);
    });

test('invalid username test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.openCRM();
    await loginPage.login(data.login.invalidUsername, data.login.password);
    });

test('invalid password test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.openCRM();
    await loginPage.login(data.login.username, data.login.invalidPassword);
    });