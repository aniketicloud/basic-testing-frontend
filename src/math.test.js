import { expect, it } from "vitest";
import { add } from "./math";

it("summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one number is provided", () => {
  // Arrange
  const numbers = [1, "two"];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];
  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});
