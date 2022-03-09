import { useState } from "react";
import FizzBuzzLogic from "./utils/FizzBuzzLogic";

function FizzBuzz(): JSX.Element {
  const [countValue, setCountValue] = useState(2);

  const [storedCountValues, setStoredCountValues] = useState<
    (number | string)[]
  >([1]);

  const handleReset = () => {
    setCountValue(2);
    setStoredCountValues([1]);
  };

  const handleAddOne = () => {
    setCountValue(countValue + 1);
    setStoredCountValues([...storedCountValues, FizzBuzzLogic(countValue)]);
  };

  return (
    <>
      <h1>FizzBuzz Counter</h1>
      <p>Number List: {storedCountValues.join(", ")}</p>
      <button onClick={handleAddOne}>Next</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default FizzBuzz;
