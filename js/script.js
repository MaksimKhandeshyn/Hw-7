// --1--
const array = [1, 2, 3];
array[1] = 10;
console.log(array);
// --2--
const arraySecond = ["One", "Two", "Three"];
arraySecond[3] = "Four";
console.log(arraySecond);
// --3--
let sums = [30, 4, 5, 10];

for (let i = 0, sum = 0; i < sums.length; sum += sums[i++]) {
  console.log(sum);
}
// let sumArr = [1, 2, 3];

// for (var i = 0, sum = 0; i < sumArr.length; sum += sumArr[i++]);
// console.log(sum);
