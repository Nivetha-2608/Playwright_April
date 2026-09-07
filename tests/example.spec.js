// @ts-check
import { test, expect } from '@playwright/test';
const {LocatorPage}= require('../pages/loginpagelocator')


test('get started link', async ({ page }) => {
  const loginPage = new LocatorPage(page);
  await loginPage.navigate();
  await loginPage.login();

});
