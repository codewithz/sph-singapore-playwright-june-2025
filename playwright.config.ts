import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
 
  use: {
    headless: false, // Run tests in headful mode
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      slowMo: 500, // Slow down operations by 50ms
  }
}
  
});
  
