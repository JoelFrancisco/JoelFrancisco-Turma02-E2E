import { Page, expect } from '@playwright/test';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async searchProductByName(): Promise<void> {
    await this.homeElements.getSearchField().fill('notebook');
    await this.homeElements.getSearchButton().click();
  }

  async checkProductVisible(): Promise<void> {
    await expect(this.homeElements.getFirstProduct()).toBeVisible();
  }

  async checkNameContainsRelevantTerm(): Promise<void> {
    await expect(this.homeElements.getFirstProduct()).toContainText("notebook");
  }
}
