document.addEventListener("DOMContentLoaded", () => {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultDisplay = document.getElementById("result");

  const getInputs = () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
      resultDisplay.textContent = "Please enter valid numbers.";
      return null;
    }

    return { num1, num2 };
  };

  const calculateSum = () => {
    const inputs = getInputs();
    if (!inputs) return;

    const { num1, num2 } = inputs;
    const sum = num1 + num2;
    resultDisplay.textContent = `Result: ${sum}`;
  };

  const calculateDifference = () => {
    const inputs = getInputs();
    if (!inputs) return;

    const { num1, num2 } = inputs;
    const difference = num1 - num2;
    resultDisplay.textContent = `Result: ${difference}`;
  };

  const calculateMultiplication = () => {
    const inputs = getInputs();
    if (!inputs) return;

    const { num1, num2 } = inputs;
    const multiplication = num1 * num2;
    resultDisplay.textContent = `Result: ${multiplication}`;
  };

  const calculateDivision = () => {
    const inputs = getInputs();
    if (!inputs) return;

    const { num1, num2 } = inputs;

    if (num2 === 0) {
      resultDisplay.textContent = "Error: Cannot divide by zero.";
      return;
    }

    const division = num1 / num2;
    resultDisplay.textContent = `Result: ${division}`;
  };

  document
    .querySelector("button:nth-of-type(1)")
    .addEventListener("click", () => calculateSum());
  document
    .querySelector("button:nth-of-type(2)")
    .addEventListener("click", () => calculateDifference());
  document
    .querySelector("button:nth-of-type(3)")
    .addEventListener("click", () => calculateMultiplication());
  document
    .querySelector("button:nth-of-type(4)")
    .addEventListener("click", () => calculateDivision());
});
