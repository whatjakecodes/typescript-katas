import {sum, splitString} from "./kata1";

/* Instructions

The goal of these katas is to see how the Typescript compiler catches mistakes.
There are issues with the code that cannot be caught until running the tests.

* run `yarn test` to see warnings and test failures
* fix the warnings first
* fix any type errors that arise
* get the tests to pass
* */

test('number type', () => {
    expect(sum("1", "2")).toBe(3);
});

test('string and array types', () => {
    expect(splitString(true)).toEqual(["t", "r", "u", "e"]);
    expect(splitString(false)).toEqual(["f", "a", "l", "s", "e"]);
});