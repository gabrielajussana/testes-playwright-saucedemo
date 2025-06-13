import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['allure-playwright'], 
  ],
  timeout: 60000, 
  expect: {
    timeout: 15000, 
    toMatchSnapshot: { maxDiffPixels: 50 },
  },
  
  use: {
    actionTimeout: 10000, 
    navigationTimeout: 30000, 
    trace: 'on-first-retry', 
    screenshot: 'only-on-failure',
  },
});