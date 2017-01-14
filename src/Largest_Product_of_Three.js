function largestProductOfThree(array) {
  const copy = [...array];
  const negativeCounter = 0;

  const largest = Math.max(...copy);
  copy.splice(copy.indexOf(largest), 1);

  console.log(largest);

  const secondLargest = Math.max(...copy);
  copy.splice(copy.indexOf(largest), 1);

  console.log(secondLargest)

  const thirdLargest = Math.max(...copy);

  console.log(thirdLargest)

  return largest * secondLargest * thirdLargest;
}

console.log(largestProductOfThree([11, 7, 5, 3, 2]));
