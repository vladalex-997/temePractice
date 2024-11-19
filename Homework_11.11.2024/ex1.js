const rollDie = () => Math.floor(Math.random() * 6) + 1;

const rollDice = () => {
  let dice1, dice2;
  do {
    dice1 = rollDie();
    dice2 = rollDie();
    console.log(`dice1: ${dice1}`);
    console.log(`dice2: ${dice2}`);
    if (dice1 === dice2) console.log("Autoroll");
  } while (dice1 === dice2);
};

document.getElementById("rollButton").addEventListener("click", rollDice);
