import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';

test.describe('Fluxo de Compra no SauceDemo', () => {
  test('Comprar mochila com sucesso', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addToCart();
    await productsPage.goToCart();

    await cartPage.checkout();
    await cartPage.fillShippingInfo('John', 'Doe', '12345');
    await cartPage.finishPurchase();

    await expect(page.getByText('Thank you for your order')).toBeVisible();
  });
});