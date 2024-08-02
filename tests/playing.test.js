const { test, expect } = require("@playwright/test");

test("check for heading", async ({ page }) => {
	await page.goto("http://127.0.0.1:3000");

	// Expect a title "to contain" a substring.
	await expect(page.getByRole("heading", { name: "hey" })).toBeVisible();
});

test("check for heading that should not be there", async ({ page }) => {
	await page.goto("http://127.0.0.1:3000");

	// Expect a title "to contain" a substring.
	const heading = await page
		.getByRole("heading", { name: "heyheyhey" })
		.isVisible();
	expect(heading).toBeFalsy();
});

// .$("element") is equivalent to document.querySelector("element")
// .$$("element") is equivalent to document.querySelectorAll("element")

test("check if the page has an h1 element", async ({ page }) => {
	await page.goto("http://127.0.0.1:3000");

	// Expect a title "to contain" a substring.
	const h1 = await page.$("h1");

	expect(h1).not.toBeNull();
});

test("check if page has exactly one h1 element", async ({ page }) => {
	await page.goto("http://127.0.0.1:3000");

	const h1Elements = await page.$$("h1");
	const h1Count = h1Elements.length;
	expect(h1Count).toBe(1);
});
