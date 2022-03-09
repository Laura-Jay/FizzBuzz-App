import { asFizzBuzz } from "./asFizzBuzz";

test("isFizz returns string of Fizz if input number is a multiple of three, else returns input number", () => {
  expect(asFizzBuzz(3)).toBe("Fizz");
  expect(asFizzBuzz(4)).toBe(4);
  expect(asFizzBuzz(10)).toBe("Buzz");
  expect(asFizzBuzz(15)).toBe("FizzBuzz");
  expect(asFizzBuzz(30)).toBe("FizzBuzz");
});
