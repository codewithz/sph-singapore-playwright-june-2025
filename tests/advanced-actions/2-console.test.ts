import { test, expect } from '@playwright/test';

test('Check console', async ({ page }) => {

  page.on('console', msg => {
    console.log(msg)
  //  expect.soft(msg.type()).not.toEqual('error');
  });

  page.on('pageerror', error => {
    console.log(`Found an error: ${error.name}, ${error.message}`);
    if (error.name === 'Error') {
      console.warn(`Warning: An error occurred - ${error.name}, ${error.message}`);
    }
    //expect.soft(error.name).not.toBe('Error');
    
  });


  page.goto('http://localhost:3000/');
  
  await page.getByRole('button', { name: 'Register' }).click();

});