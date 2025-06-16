import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('singapore dollar to inr');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dsingapore%2Bdollar%2Bto%2Binr%26sca_esv%3D01250f61e108407c%26source%3Dhp%26ei%3DBtFPaOi6GqW3vr0P9Z68oAs%26iflsig%3DAOw8s4IAAAAAaE_fFmxXUTuMeXbQdlUvRvrDP9MwLR2j%26ved%3D0ahUKEwjo1eG5vvWNAxWlm68BHXUPD7QQ4dUDCA8%26uact%3D5%26oq%3Dsingapore%2Bdollar%2Bto%2Binr%26gs_lp%3DEgdnd3Mtd2l6IhdzaW5nYXBvcmUgZG9sbGFyIHRvIGlucjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIuChQAFi_J3AAeACQAQCYATOgAfsFqgECMjO4AQPIAQD4AQGYAhegAqEGwgIEEAAYA8ICCBAAGIAEGLEDwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQABiABBixAxiDAcICCBAuGIAEGLEDwgIOEAAYgAQYigUYsQMYgwHCAggQLhiABBjUAsICDhAuGIAEGLEDGMcBGK8BmAMAkgcCMjOgB-a4AbIHAjIzuAehBsIHBjYuMTYuMcgHHA%26sclient%3Dgws-wiz%26sei%3DD9FPaIGRGYGZ4-EPhN3QEA&q=EgTKGxgBGI-iv8IGIjDU7esHwLVv-3-DagH__Z1T3m98DXmB0kF-KkY6MapWOwIsAarJP-KQy1fAAetG5-4yAVJaAUM');
  await page.locator('iframe[name="a-qvrmkl35ivx8"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-qvrmkl35ivx8"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-qvrmkl35ivx8"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
  await page.locator('iframe[name="c-qvrmkl35ivx8"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-qvrmkl35ivx8"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-qvrmkl35ivx8"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-qvrmkl35ivx8"]').contentFrame().locator('.rc-imageselect-tile.rc-imageselect-dynamic-selected').click();
  await page.locator('iframe[name="c-qvrmkl35ivx8"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
  await page.locator('iframe[name="c-qvrmkl35ivx8"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('spinbutton', { name: 'Currency Amount Field' }).first().click();
  await page.getByRole('spinbutton', { name: 'Currency Amount Field' }).first().fill('100');
  await page.getByRole('spinbutton', { name: 'Currency Amount Field' }).first().press('Tab');
});