function sumArray(array) {
  let currentMax = array[0];
  let greatestSum = currentMax;

  for (let index = 1; index < array.length; index++) {
    const number = array[index];
    currentMax = Math.max(currentMax + number, number);
    greatestSum = Math.max(greatestSum, currentMax);
  }

  return greatestSum;
}

// console.log(sumArray([])); // 0
// console.log(sumArray([-1])); // 0
// console.log(sumArray([1])); // 1
// console.log(sumArray([1, 2])); // 3
// console.log(sumArray([1, 2, 3])); // 6
// console.log(sumArray([4, -1, 5])); // 8
// console.log(sumArray([10, -11, 11])); // 11
// console.log(sumArray([1, 2, 3, -6, 4, 5, 6])); // 15
// console.log(sumArray([-5, -5, -5, 2, 3])); // 5
// console.log(sumArray([-3, 8, 3, 1, 0, -4]));
// console.log(sumArray([-7, -6, -9])); // -6
console.log(sumArray([1, 2, 3, -4, 5, -4, 5, -4, -4])); // 8
