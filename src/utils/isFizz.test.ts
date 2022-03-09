import { isFizz } from "./isFizz";

test("isFizz returns a boolean stating if the number passed is a multiple of 3", () => {
  expect(isFizz(3)).toBe(true);
  expect(isFizz(4)).toBe(false);
  expect(isFizz(9)).toBe(true);
});
