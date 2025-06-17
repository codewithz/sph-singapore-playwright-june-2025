import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  fullyParallel:true,
  workers:"50%", // Use 50% of available CPU cores for parallel execution
 
  use: {
    headless: false, // Run tests in headful mode
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      slowMo: 500, // Slow down operations by 50ms
  },
  baseURL: 'http://localhost:3000', // Base URL for tests
}
  
});
  
