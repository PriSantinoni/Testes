import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buger-eats.vercel.app/');
  await expect(page.getByText('Seja um parceiro entregador' )).toBeVisible();
  await page.getByText('Cadastre-se para fazer entregas' ).first().click();
  await expect(page.getByText('Dados')).toBeVisible();
  await page.locator('[name="name"]').fill('Teste teste');
  await page.locator('[name="cpf"]').fill('99477874000');
  await page.locator('name="email"').fill('teste@testes.com');
  await page.locator('[name="whatsapp"]').fill('1452155626');
  await page.locator('[name="postalcode"]').fill('88814505');
  await page.getByRole('button', { name: 'Buscar CEP' }).click();
  await page.locator('[name="address-number"]').fill('500');
  await page.locator('[name="address-details"]').fill('teste');
  await page.locator('input[type="file"]').setInputFiles('./file/tates.jpg');
  await page.getByText('listitem').filter({ hasText: 'Moto' }).click();
  await page.getByRole('button', { name: 'Cadastre-se para fazer' }).click();
  await expect(page.gatByText('Aí Sim...'));
  await page.locator('button', { name: 'Fechar' }).click();
});