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
let markHigherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's?", markHigherBMI);

//second set of data
markheight = 1.88;
markweight = 95;
johnheight = 1.76;
johnweight = 85;

markBMI = markweight / (markheight * markheight);
johnBMI = johnweight / (johnheight * johnheight);
markHigherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's?", markHigherBMI);
