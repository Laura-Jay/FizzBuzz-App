export function asFizzBuzz(count: number): number | string {
  if (Number.isInteger(count / 15)) {
    return "FizzBuzz";
  } else if (Number.isInteger(count / 3)) {
    return "Fizz";
  } else if (Number.isInteger(count / 5)) {
    return "Buzz";
  }
  return count;
}
