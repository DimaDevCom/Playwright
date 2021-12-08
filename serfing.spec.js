const{test,expect} = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');

  // Click text=Laptops
  await page.click('text=Laptops');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');

  // Click a:has-text("MacBook Pro")
  await page.click('a:has-text("MacBook Pro")');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=15');

  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Add to cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=15#');

  // Click a:has-text("Contact")
  await page.click('a:has-text("Contact")');

  // Click text=Close
  await page.click('text=Close');

  // Click text=PRODUCT STORE
  await page.click('text=PRODUCT STORE');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

});