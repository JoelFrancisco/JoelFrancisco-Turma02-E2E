import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Filter by CEP', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;

  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  const USER_AGENT = TheConfig.fromFile(CONFIG)
    .andPath('application.user_agent')
    .retrieveData();

  test.use({ 
    userAgent: USER_AGENT,
    bypassCSP: true
  });

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Filter by CEP', async () => {
    await homePage.clickFilterByCepButton();
    await homePage.filterCepField();
    await homePage.checkIfCorrectLocation();
  });
});
