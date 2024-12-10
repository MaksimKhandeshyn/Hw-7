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
const numberArray = [54, 93, 100, 10, 15, 10000];
let number = 0;
for (let i = 0; i < numberArray.length; i++) {
  numberArray[(number += 2)];
  if (numberArray[i] > numberArray[number]) {
    console.log(numberArray[i]);
  }
}
