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
    await expect(this.homeElements.getFirstProduct()).toContainText("notebook", {
        ignoreCase: true
    });
  }

  async clickFilterByCepButton(): Promise<void> {
    await this.homeElements.getCepButton().click();
  }

  async filterCepField(): Promise<void> {
    await this.homeElements.getCepInput().fill("88820000");
    await this.homeElements.getCepSubmitButton().click();
  }

  async checkIfCorrectLocation(): Promise<void> {
    await expect(this.homeElements.getLocation()).toContainText("içara", {
        ignoreCase: true
    });
  }
}
