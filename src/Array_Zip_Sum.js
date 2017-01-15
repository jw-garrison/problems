const zipSum = (xs, ys) => xs
  .slice(0, ys.length)
  .map((xsEl, i) => xsEl + ys[i]);

const inputs = [
  [[100, 1], [50, 5]],
  [[0, 7, 5, 3, 5, 7, 8, 9, 9, 6, 5, 6, 8, 8], [1]],
  [[10, 20], [1, 2, 3]],
  [[10, 20, 30], [1, 2, 3]],
  [[10, 20, 30], [1, 2]],
  [[2, 3, 2, 3, 2], [20, 30, 20, 30, 20]],
];

const expected = [
  [150, 6],
  [1],
  [11, 22],
  [11, 22, 33],
  [11, 22],
  [22, 33, 22, 33, 22],
];

const logger = (is, o) => {
  is.forEach((i, idx) => {
    console.log('------------------------------');
    console.log(`${idx + 1}) zipSum([${i[0]}], [${i[1]}])`);
    console.log(' ');
    console.log(`INPUT: [${i[0]}], [${i[1]}]`);
    console.log('EXPECTED: ', o[idx]);
    console.log('OUTPUT: ', zipSum(i[0], i[1]));
    console.log('------------------------------');
    console.log(' ');
  });
};

logger(inputs, expected);
