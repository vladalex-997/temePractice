function calculateSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
    return;
  }

  let sum = num1 + num2;
  document.getElementById("result").textContent = `Result: ${sum}`;
}

function calculateDifference() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
    return;
  }

  let difference = num1 - num2;
  document.getElementById("result").textContent = `Result: ${difference}`;
}

function calculateMultiplication() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
    return;
  }

  let multiplication = num1 * num2;
  document.getElementById("result").textContent = `Result: ${multiplication}`;
}

function calculateDivision() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
    return;
  }

  if (num2 === 0) {
    document.getElementById("result").textContent =
      "Error: Cannot divide by zero.";
    return;
  }

  let division = num1 / num2;
  document.getElementById("result").textContent = `Result: ${division}`;
}
