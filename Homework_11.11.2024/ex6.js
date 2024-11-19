let randomNumbers = [];

const generateRandomList = () => {
  randomNumbers = [];
  for (let i = 0; i < 9; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
  }
  document.getElementById("randomList").innerText =
    "Random List: [" + randomNumbers.join(", ") + "]";
};

const multiplyList = () => {
  const userNumber = document.getElementById("numberInput").value;
  if (userNumber && randomNumbers.length > 0) {
    const result = randomNumbers.map((num) => num * userNumber);
    document.getElementById("result").innerText =
      "The result is: [" + result.join(", ") + "]";
  } else {
    document.getElementById("result").innerText =
      "Please generate a list and insert a valid number.";
  }
};

document
  .getElementById("generateButton")
  .addEventListener("click", generateRandomList);
document.getElementById("submitButton").addEventListener("click", multiplyList);
