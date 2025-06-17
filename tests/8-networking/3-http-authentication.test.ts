import {test,expect} from '@playwright/test';

// 1] Create a Repo via Web API
// 2] Go to UI and check if it exists

const REPO="sph-playwright-test-repo";

test.use({
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    }
});

test.beforeEach("Create Repo", async ({request}) => {
    const response=await request.post('/user/repos', {
        data:{
            name:REPO
        }
    });
    console.log(response.status());
    console.log(response.statusText());
    expect(response.ok()).toBeTruthy();
});

test("Work with Repo", async ({page}) => {
    await page.goto("https://github.com/codewithz?tab=repositories");
    await expect(page.getByRole('link', { name: REPO })).toHaveCount(1);
});

test.afterEach('Delete repo', async ({ request }) => {

    const response = await request.delete(`repos/codewithz/${REPO}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status() === 204);
});



