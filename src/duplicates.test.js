const findDuplicates = require('./duplicates');

test('returns true for duplicate string arguments', () => {
    expect(findDuplicates('1', '2', '3', '2')).toBe(true);
});

test('returns true for duplicate number arguments', () => {
    expect(findDuplicates(1, 2, 3, 2)).toBe(true);
});

test('returns false for unique arguments', () => {
    expect(findDuplicates(1, 2, 3)).toBe(false);
});

test('returns true for duplicate undefined arguments', () => {
    expect(findDuplicates(undefined, undefined, null, NaN)).toBe(true);
});

test('returns false for unique arguments', () => {
    expect(findDuplicates('s', -4, 'N', '33', 'P', 18, 'L', '4', -38, 5, '+', 4, 38, 'z', 16, 35, 33)).toBe(false);
});

// test('returns false for unique arguments', () => {
//     expect(findDuplicates(-28, '@', 43, -48, 18, 11, '4', -25, '43')).toBe(false);
// });
