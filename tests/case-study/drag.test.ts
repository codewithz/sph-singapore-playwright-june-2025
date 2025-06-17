import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Image upload by drag-and-drop', async ({ page }) => {
  await page.goto('http://localhost:3000/drag.html'); // adjust URL

  const dropZone = page.locator('[data-testid="drop-zone"]');
  const filePath = path.resolve(__dirname, '../../assets/sample.jpg');
  console.log('File path:', filePath);
  const fileContent = fs.readFileSync(filePath);

  // Simulate file drag-and-drop
  const dataTransfer = await page.evaluateHandle(() => new DataTransfer());
  await page.evaluate(({ dropZone, dataTransfer, fileContent }) => {
    /**
     * Creates a new File object representing a JPEG image.
     * 
     * @param fileContent - The content of the file as a Blob, ArrayBuffer, or string.
     * @param 'sample.jpg' - The name of the file.
     * @param { type: 'image/jpeg' } - The MIME type of the file, indicating it is a JPEG image.
     * 
     * @returns A File object that can be used for file uploads or other file-related operations.
     */
    const file = new File([fileContent], 'sample.jpg', { type: 'image/jpeg' });
    dataTransfer.items.add(file);
    dropZone.dispatchEvent(new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer }));
  }, { dropZone: await dropZone.elementHandle(), dataTransfer, fileContent });

  // Wait for the image to load inside the drop-zone
  const uploadedImage = dropZone.locator('img');
  await expect(uploadedImage).toBeVisible();

  // Verify the image src is a blob URL
  const src = await uploadedImage.getAttribute('src');
  expect(src).toMatch(/^blob:http:\/\/localhost:3000\/.+$/); // Ensure it's a valid blob URL
});