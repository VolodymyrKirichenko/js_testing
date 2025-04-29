// longestCommonPrefix.test.js

const longestCommonPrefix = require('./longestCommonPrefix');

test('return true prefix for common strings', () => {
// test('повертає правильний префікс для спільних рядків', () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

// test('повертає порожній рядок, якщо спільного префікса немає', () => {
test('return an empty string if there is no common prefix', () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

// test('працює, якщо масив містить один рядок', () => {
test('work if the array contains one string', () => {
  expect(longestCommonPrefix(["alone"])).toBe("alone");
});

// test('працює з порожнім масивом', () => {
test('work with an empty array', () => {
  expect(longestCommonPrefix([])).toBe("");
});
