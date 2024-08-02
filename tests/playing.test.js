const { test, expect } = require("@playwright/test");

test("Checking for heading", async ({ page }) => {
	await page.goto("http://127.0.0.1:3000");

	// Expect a title "to contain" a substring.
	await expect(page.getByRole("heading", { name: "hey" })).toBeVisible();
});

test("Checking for heading that should not be there", async ({ page }) => {
	await page.goto("http://127.0.0.1:3000");

	// Expect a title "to contain" a substring.
	const heading = await page
		.getByRole("heading", { name: "heyheyhey" })
		.isVisible();
	expect(heading).toBeFalsy();
});
