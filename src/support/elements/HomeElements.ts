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

  getCepButton(): Locator {
    return this.page.locator('button:has(path#icon)').first();
  }

  getCepInput(): Locator {
    return this.page.locator('input#zipcode');
  }

  getCepSubmitButton(): Locator {
    return this.page.getByTestId('cta-cep-modal');
  }

  getHeader(): Locator {
    return this.page.locator('#new-header');
  }
}
