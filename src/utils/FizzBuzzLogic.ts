import { isFizz } from "./isFizz";
import { isBuzz } from "./isBuzz";
import { isFizzBuzz } from "./isFizzBuzz";

function FizzBuzzLogic(countValue: number): string | number {
  if (isFizzBuzz(countValue)) {
    return "FizzBuzz";
  } else if (isFizz(countValue)) {
    return "Fizz";
  } else if (isBuzz(countValue)) {
    return "Buzz";
  }
  return countValue;
}

export default FizzBuzzLogic;
