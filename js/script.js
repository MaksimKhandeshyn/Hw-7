// --1--
const array = [1, 2, 3];
array[1] = 10;
console.log(array);
// --2--
const arraySecond = ["One", "Two", "Three"];
arraySecond[3] = "Four";
console.log(arraySecond);
// --3--
const sumsArray = [30, 4, 5, 10];
let sum = 0;
for (let i = 0; i < sumsArray.length; i++) {
  sum += sumsArray[i];
}
console.log(sum);
// --4--
const numArray = [34, 1, 45, 83, "Thats numbers", "No"];
for (let i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}
// --5--
const stringArray = ["Five", "Stringssss", "Hi", "Undefind"];
for (let i = 0; i < stringArray.length; i++) {
  if (stringArray[i].length > 5) {
    console.log(stringArray[i]);
  }
}
// --6--
const numberArray = [125, 93, 100, 101, 15, 131];
let number = numberArray[0];
for (let i = 0; i < numberArray.length; i++) {
  if (numberArray[i] > number) {
    number = numberArray[i];
  }
}
console.log(number);
//--7--
const pairArray = [12, 31, 8, 9, 74, 3];
for (let i = 0; i < pairArray.length; i++) {
  if (pairArray[i] % 2 === 0) {
    console.log(pairArray[i]);
  } else {
    continue;
  }
}
