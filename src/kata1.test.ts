import { sum } from './kata1'

test('adds 1 + 2 to equal 3', () => {
    // 1. Force a compile error
    // 2. Fix the test
    expect(sum("1", "2")).toBe(3);
});