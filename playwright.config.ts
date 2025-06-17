import { defineConfig,devices} from '@playwright/test';

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

projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] }
  },

  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] }
  },
  {
    name: 'Mobile Safari',
    use: { ...devices['iPhone 12'] },
    testDir: './tests/mobile'
  },

   // by purpose
   {
    name: 'Smoke',
    testMatch: /.*smoke.test.ts/,
    retries: 0
  },

  {
    name: 'Regular',
    testIgnore: /.*smoke.test.ts/,
    retries: 2,
    use: {
      // ...
    }
  },

  {
    name: 'setup-cleanup-demo',
    testMatch: '4-global-config.test.ts',
    dependencies: ['setup', 'admin-auth', 'populate-db'],
  },

  {
    name: 'cleanup',
    testMatch: '**/global.teardown.ts'
  },

  {
    name: 'setup',
    testMatch: '**/global.setup.ts',
    teardown: 'cleanup'
  },

  {
    name: 'admin-auth',
    testMatch: '**/admin-auth.setup.ts',
  },

  {
    name: 'populate-db',
    testMatch: '**/populate-db.setup.ts',
  }
  
]
  

});
  
