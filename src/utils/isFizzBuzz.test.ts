import { isFizzBuzz } from "./isFizzBuzz";

test("isFizzBuzz returns a boolean stating if the number passed is a multiple of 15", () => {
  expect(isFizzBuzz(3)).toBe(false);
  expect(isFizzBuzz(15)).toBe(true);
  expect(isFizzBuzz(5)).toBe(false);
  expect(isFizzBuzz(30)).toBe(true);
});
