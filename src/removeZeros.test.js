const removeTrailingZeros = require('./removeZeros');

test('returns the array without zeros', () => {
    expect(removeTrailingZeros(123000)).toBe(123);
});

test('returns zero when the input is float', () => {
    expect(removeTrailingZeros(123.45000)).toBe(123.45);
});

test('returns zero when the input is zero', () => {
    expect(removeTrailingZeros(0)).toBe(0);
});

test('returns zero when the input is negative', () => {
    expect(removeTrailingZeros(-123000)).toBe(-123);
});

test('returns zero when the input is negative float', () => {
    expect(removeTrailingZeros(-123.45000)).toBe(-123.45);
});

test('returns zero when the input is negative float with zeros in the middle', () => {
    expect(removeTrailingZeros(-1203.45000)).toBe(-1203.45);
});