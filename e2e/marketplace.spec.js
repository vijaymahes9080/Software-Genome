/**
 * Software Genome (SGX) - Playwright End-to-End Test Suite
 */

const { test, expect } = require('@playwright/test');

test.describe('Software Genome Studio & Synthesizer', () => {
  test('should load application ingestion center and 10 benchmark apps', async ({ page }) => {
    await page.goto('http://localhost:4000');
    await expect(page.locator('h1')).toContainText('Software Genome');
    
    // Verify 10 Benchmark App Cards
    const appCards = page.locator('.app-card');
    await expect(appCards).toHaveCount(10);
  });

  test('should switch tabs and render interactive genome graph', async ({ page }) => {
    await page.goto('http://localhost:4000');
    await page.click('button[data-tab="tab-graph"]');
    
    // Canvas element visibility check
    const canvas = page.locator('#genomeGraphCanvas');
    await expect(canvas).toBeVisible();
  });

  test('should synthesize rural property app from requirements prompt', async ({ page }) => {
    await page.goto('http://localhost:4000');
    await page.click('button[data-tab="tab-synthesizer"]');
    
    await page.click('#synthesizeBtn');
    await expect(page.locator('#codeDisplayBlock')).toContainText('RuralPropertyApp');
  });
});
