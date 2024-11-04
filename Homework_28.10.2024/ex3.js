let dolphinscoreavg;
let koalascoreavg;

//first set of data
let round1dol = 96;
let round2dol = 108;
let round3dol = 89;

let round1ko = 88;
let round2ko = 91;
let round3ko = 110;

dolphinscoreavg = (round1dol + round2dol + round3dol) / 3;
koalascoreavg = (round1ko + round2ko + round3ko) / 3;

console.log("First set of data: ");

if (dolphinscoreavg > koalascoreavg && dolphinscoreavg >= 100) {
  console.log(
    `Dolphins win-> dolphinsscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
} else if (koalascoreavg > dolphinscoreavg && koalascoreavg >= 100) {
  console.log(
    `Koalas win-> koalascoreavg: ${koalascoreavg} vs dolphinsscoreavg: ${dolphinscoreavg}`
  );
} else if (
  dolphinscoreavg === koalascoreavg &&
  dolphinscoreavg >= 100 &&
  koalascoreavg >= 100
) {
  console.log(
    `Both win-> dolphinscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
} else {
  console.log(
    `No one wins-> dolphinsscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
}

console.log("\n");

//second set of data
round1dol = 97;
round2dol = 112;
round3dol = 101;

round1ko = 109;
round2ko = 95;
round3ko = 123;

dolphinscoreavg = (round1dol + round2dol + round3dol) / 3;
koalascoreavg = (round1ko + round2ko + round3ko) / 3;

console.log("Second set of data: ");

if (dolphinscoreavg > koalascoreavg && dolphinscoreavg >= 100) {
  console.log(
    `Dolphins win-> dolphinsscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
} else if (koalascoreavg > dolphinscoreavg && koalascoreavg >= 100) {
  console.log(
    `Koalas win-> koalascoreavg: ${koalascoreavg} vs dolphinsscoreavg: ${dolphinscoreavg}`
  );
} else if (
  dolphinscoreavg === koalascoreavg &&
  dolphinscoreavg >= 100 &&
  koalascoreavg >= 100
) {
  console.log(
    `Both win-> dolphinsscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
} else {
  console.log(
    `No one wins-> dolphinsscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
}

console.log("\n");

//third set of data
round1dol = 97;
round2dol = 112;
round3dol = 101;

round1ko = 109;
round2ko = 95;
round3ko = 106;

dolphinscoreavg = (round1dol + round2dol + round3dol) / 3;
koalascoreavg = (round1ko + round2ko + round3ko) / 3;

console.log("Third set of data: ");

if (dolphinscoreavg > koalascoreavg && dolphinscoreavg >= 100) {
  console.log(
    `Dolphins win-> dolphinsscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
} else if (koalascoreavg > dolphinscoreavg && koalascoreavg >= 100) {
  console.log(
    `Koalas win-> koalascoreavg: ${koalascoreavg} vs dolphinsscoreavg: ${dolphinscoreavg}`
  );
} else if (
  dolphinscoreavg === koalascoreavg &&
  dolphinscoreavg >= 100 &&
  koalascoreavg >= 100
) {
  console.log(
    `Both win-> dolphinscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
} else {
  console.log(
    `No one wins-> dolphinsscoreavg: ${dolphinscoreavg} vs koalascoreavg: ${koalascoreavg}`
  );
}
