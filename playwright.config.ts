
import { defineConfig, devices } from '@playwright/test';

/**
 * Detect whether tests are running in a CI environment,
 * such as GitHub Actions.
 */
const isCI = !!process.env.CI;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // Folder containing all test files.
  testDir: './tests',

  /* Run test files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: isCI,

  /* Retry failed tests on CI only */
  retries: isCI ? 2 : 0,

  /* Opt out of parallel tests on CI */
  workers: isCI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below.
     See https://playwright.dev/docs/api/class-testoptions. */

  // Timeout for each test, in milliseconds.
  // timeout: 40000,

  // Timeout for each expect assertion, in milliseconds.
  // expect: {
  //   timeout: 10000,
  // },

  use: {
    /* Base URL to use in actions like await page.goto('/login') */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test.
       See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    // Set to true to see the browser while tests run.
    // Change to true for local debugging; set to false for headless execution.
    headless: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      // Run tests in Chromium (Chrome-based browser).
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

    /*{
      // Run tests in Firefox.
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      // Run tests in WebKit (Safari engine).
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */

    /* Test against mobile viewports. Uncomment to enable.

    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    */

    /* Test against branded browsers. Uncomment to enable.

    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },

    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },

    */
  ],

  /* Run your local dev server before starting the tests.
     Uncomment this section if your application runs locally. */

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !isCI,
  // },
});
