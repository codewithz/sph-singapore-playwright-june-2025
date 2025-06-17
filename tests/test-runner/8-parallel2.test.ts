import { test } from '@playwright/test';

test.describe('Feature A Group', () => {

    test('Test 1', async () => { });
    test('Test 2', async () => { });
    test('Test 3', async () => { });
    test('Test 4', async () => { });
    test('Test 5', async () => { });
    test('Test 6', async () => { });

});

// npx playwright test tests/test-runner/8-parallel2.test.ts --workers 6