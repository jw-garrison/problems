const spiralTraversal = (matrix) => {
  let result = [];
  const copy = matrix.map((arr) => [...arr]);

  const goSpiral = (arrays) => {
    result = [...result, ...arrays.shift()];

    arrays.forEach((array) => {
      if (array.length > 0) {
        result.push(array.pop());
      }
    });

    if (arrays.length > 0) {
      result = [...result, ...arrays.pop().reverse()];
    }

    [...arrays].reverse().forEach((array) => {
      if (array.length > 0) {
        result.push(array.shift());
      }
    });

    if (arrays.length > 0) {
      goSpiral(arrays);
    }
  };

  goSpiral(copy);
  return result;
};

console.log(spiralTraversal(
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]
));

console.log(spiralTraversal(
  [
    [1],
    [2],
    [3],
    [4],
  ]
));
