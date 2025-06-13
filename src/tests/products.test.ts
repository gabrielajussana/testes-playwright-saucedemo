import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/products.page';
import { LoginPage } from '../pages/login.page';

test.describe('Testes de produto', () => {
  let productsPage: ProductsPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce')
    await productsPage.goto();
  });

});