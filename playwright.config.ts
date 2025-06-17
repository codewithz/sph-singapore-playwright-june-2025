import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  fullyParallel:true,
  workers:"50%", // Use 50% of available CPU cores for parallel execution
 
  use: {
    headless: false, 
    timezoneId: 'Asia/Singapore', // Set timezone to Singapore
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      slowMo: 500, // Slow down operations by 50ms
  },
  baseURL: 'http://localhost:3000', // Base URL for tests
},
// webServer: {
//   command: 'npm start', // Command to start the server
//   url: 'http://localhost:3001', // URL to wait for the server to be ready
// }
  
});
  
