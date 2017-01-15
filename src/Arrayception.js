const arrayception = (array) => {
  let max = 0;

  (function deeper(arr = array, curr = 1) {
    if (arr.some(e => !Array.isArray(e)) && curr > max) {
      max = curr;
    }
    arr.filter(e => Array.isArray(e) && e.toString())
      .forEach(e => deeper(e, curr + 1));
  }());

  return max;
};

const inputs = [
  [[5], [[]]],
  [10, 20, 30, 40],
  [[10, 20], [[30, [40]]]],
  [],
  [[[]]],
  [1, [2], 3, [4, 5, [6], 7]],
];

const expected = [2, 1, 4, 0, 0, 3];

const logger = (is, o) => {
  is.forEach((i, idx) => {
    console.log('------------------------------');
    console.log(`${idx + 1}) arrayception(${i})`);
    console.log(' ');
    console.log('INPUT: ', i);
    console.log('EXPECTED: ', o[idx]);
    console.log('OUTPUT: ', arrayception(i));
    console.log('------------------------------');
    console.log(' ');
  });
};

logger(inputs, expected);
