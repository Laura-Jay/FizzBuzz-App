import { isBuzz } from "./isBuzz";

test("isBuzz returns a boolean stating if the number passed is a multiple of 5", () => {
  expect(isBuzz(3)).toBe(false);
  expect(isBuzz(5)).toBe(true);
  expect(isBuzz(25)).toBe(true);
});
