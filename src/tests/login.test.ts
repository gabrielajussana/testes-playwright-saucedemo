import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';


test.describe('Fluxo Login no SauceDemo', () => {
  test('Realizar login com sucesso', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page.getByText('Products')).toBeVisible();
  });

  test('Realizar login com falha', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
  });
});