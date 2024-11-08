import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator('input[type="search"]');
  }

  getSearchButton(): Locator {
    return this.page.getByLabel('Buscar');
  }

  getFirstProduct(): Locator {
    return this.page.getByTestId('product-card::card').nth(0);
  }
}
