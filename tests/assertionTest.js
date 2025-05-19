// assertions.js
const { expect } = require('@playwright/test');

module.exports = {
  toBeAttached: async (locator) => await expect(locator).toBeAttached(),

  toBeChecked: async (locator) => await expect(locator).toBeChecked(),
  toBeUnChecked: async (locator) => await expect(locator).toBeUnChecked(),
  toBeDisabled: async (locator) => await expect(locator).toBeDisabled(),
  toBeEditable: async (locator) => await expect(locator).toBeEditable(),
  toBeEmpty: async (locator) => await expect(locator).toBeEmpty(),
  toBeEnabled: async (locator) => await expect(locator).toBeEnabled(),
  toBeFocused: async (locator) => await expect(locator).toBeFocused(),
  toBeHidden: async (locator) => await expect(locator).toBeHidden(),
  toBeInViewport: async (locator) => await expect(locator).toBeInViewport(),
  toBeVisible: async (locator) => await expect(locator).toBeVisible(),
  toContainText: async (locator, text) => await expect(locator).toContainText(text),
  toHaveAccessibleDescription: async (locator, description) =>
    await expect(locator).toHaveAccessibleDescription(description),
  toHaveAccessibleName: async (locator, name) =>
    await expect(locator).toHaveAccessibleName(name),
  toHaveAttribute: async (locator, attr, value) =>
    await expect(locator).toHaveAttribute(attr, value),
  toHaveClass: async (locator, className) => await expect(locator).toHaveClass(className),
  toHaveCount: async (locator, count) => await expect(locator).toHaveCount(count),
  toHaveCSS: async (locator, property, value) =>
    await expect(locator).toHaveCSS(property, value),
  toHaveId: async (locator, id) => await expect(locator).toHaveId(id),
  toHaveJSProperty: async (locator, prop, value) =>
    await expect(locator).toHaveJSProperty(prop, value),
  toHaveRole: async (locator, role, options = {}) =>
    await expect(locator).toHaveRole(role, options),
  toHaveScreenshot: async (locator, options = {}) =>
    await expect(locator).toHaveScreenshot(options),
  toHaveText: async (locator, text) => await expect(locator).toHaveText(text),
  toHaveValue: async (locator, value) => await expect(locator).toHaveValue(value),
  toHaveValues: async (locator, values) => await expect(locator).toHaveValues(values),
  pageToHaveScreenshot: async (page, options = {}) =>
    await expect(page).toHaveScreenshot(options),
  pageToHaveTitle: async (page, title) => await expect(page).toHaveTitle(title),
  pageToHaveURL: async (page, url) => await expect(page).toHaveURL(url),
  responseToBeOK: async (response) => await expect(response).toBeOK(),
};

// Another way of writing the same function

// const { expect } = require('@playwright/test');

// class Assertions {
//   static async toBeAttached(locator) {
//     await expect(locator).toBeAttached();
//   }

//   static async toBeChecked(locator) {
//     await expect(locator).toBeChecked();
//   }

//   static async toBeDisabled(locator) {
//     await expect(locator).toBeDisabled();
//   }

//   static async toBeEditable(locator) {
//     await expect(locator).toBeEditable();
//   }

//   static async toBeEmpty(locator) {
//     await expect(locator).toBeEmpty();
//   }

//   static async toBeEnabled(locator) {
//     await expect(locator).toBeEnabled();
//   }

//   static async toBeFocused(locator) {
//     await expect(locator).toBeFocused();
//   }

//   static async toBeHidden(locator) {
//     await expect(locator).toBeHidden();
//   }

//   static async toBeInViewport(locator) {
//     await expect(locator).toBeInViewport();
//   }

//   static async toBeVisible(locator) {
//     await expect(locator).toBeVisible();
//   }

//   static async toContainText(locator, text) {
//     await expect(locator).toContainText(text);
//   }

//   static async toHaveAccessibleDescription(locator, description) {
//     await expect(locator).toHaveAccessibleDescription(description);
//   }

//   static async toHaveAccessibleName(locator, name) {
//     await expect(locator).toHaveAccessibleName(name);
//   }

//   static async toHaveAttribute(locator, attr, value) {
//     await expect(locator).toHaveAttribute(attr, value);
//   }

//   static async toHaveClass(locator, className) {
//     await expect(locator).toHaveClass(className);
//   }

//   static async toHaveCount(locator, count) {
//     await expect(locator).toHaveCount(count);
//   }

//   static async toHaveCSS(locator, property, value) {
//     await expect(locator).toHaveCSS(property, value);
//   }

//   static async toHaveId(locator, id) {
//     await expect(locator).toHaveId(id);
//   }

//   static async toHaveJSProperty(locator, prop, value) {
//     await expect(locator).toHaveJSProperty(prop, value);
//   }

//   static async toHaveRole(locator, role, options = {}) {
//     await expect(locator).toHaveRole(role, options);
//   }

//   static async toHaveScreenshot(locator, options = {}) {
//     await expect(locator).toHaveScreenshot(options);
//   }

//   static async toHaveText(locator, text) {
//     await expect(locator).toHaveText(text);
//   }

//   static async toHaveValue(locator, value) {
//     await expect(locator).toHaveValue(value);
//   }

//   static async toHaveValues(locator, values) {
//     await expect(locator).toHaveValues(values);
//   }

//   static async pageToHaveScreenshot(page, options = {}) {
//     await expect(page).toHaveScreenshot(options);
//   }

//   static async pageToHaveTitle(page, title) {
//     await expect(page).toHaveTitle(title);
//   }

//   static async pageToHaveURL(page, url) {
//     await expect(page).toHaveURL(url);
//   }

//   static async responseToBeOK(response) {
//     await expect(response).toBeOK();
//   }
// }

// module.exports = Assertions;
