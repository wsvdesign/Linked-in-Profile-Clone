import { expect, test } from '@playwright/test';

test('profile switch updates history and browser back restores Leo', async ({ page }) => {
  await page.goto('/');

  await page.locator('.sidebar-person').filter({ hasText: 'Dario Amodei' }).first().evaluate((node) => node.click());
  await expect(page.locator('.profile-name')).toContainText('Dario Amodei');
  await expect(page).toHaveURL(/profile=dario-amodei/);

  await page.goBack();
  await expect(page.locator('.profile-name')).toContainText('Leo Martinez');
});

test('skills page opens and category filters return expected row counts', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: /Show all 24 skills/i }).click();
  await expect(page).toHaveURL(/view=skills/);

  await page.getByRole('button', { name: 'Industry Knowledge' }).click();
  await expect(page.locator('.skills-page-row')).toHaveCount(7);

  await page.getByRole('button', { name: 'Tools & Technologies' }).click();
  await expect(page.locator('.skills-page-row')).toHaveCount(9);

  await page.getByRole('button', { name: 'Interpersonal Skills' }).click();
  await expect(page.locator('.skills-page-row')).toHaveCount(4);

  await page.getByRole('button', { name: 'Other Skills' }).click();
  await expect(page.locator('.skills-page-row')).toHaveCount(4);
});
