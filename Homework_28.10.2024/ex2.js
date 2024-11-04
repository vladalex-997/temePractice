let markheight;
let markweight;
let johnheight;
let johnweight;

//first set of data
markheight = 1.69;
markweight = 78;
johnheight = 1.95;
johnweight = 92;

let markBMI = markweight / (markheight * markheight);
let johnBMI = johnweight / (johnheight * johnheight);

console.log("First set of data:");

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI} `);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}

//second set of data
markheight = 1.88;
markweight = 95;
johnheight = 1.76;
johnweight = 85;

markBMI = markweight / (markheight * markheight);
johnBMI = johnweight / (johnheight * johnheight);

console.log("Second set of data:");

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI} `);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}
