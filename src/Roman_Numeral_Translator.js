const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateRomanNumeral = rN => !rN ? 0 :
  [...rN].map(r => DIGIT_VALUES[r])
    .reduce((acc, curr, i, arr) => curr < arr[i + 1] ?
      acc - curr : acc + curr, 0) || 'null';

// const translateRomanNumeral = rN => !rN ? 0 :
//   [...rN].map(r => DIGIT_VALUES[r])
//     .reduce((acc, curr, i, arr) => curr < arr[i + 1] ?
//       acc - curr : acc + curr, 0) || 'null';
//
// const translateRomanNumeral = rN => !rN ? 0 :
//   [...rN].map(r => DIGIT_VALUES[r]);

const inputs = [
  'horse',
  'XIV',
  'IV',
  'II',
  '',
];

const expected = ['null', 14, 4, 2, 0];

const logger = (is, o) => {
  is.forEach((i, idx) => {
    console.log('------------------------------');
    console.log(`${idx + 1}) translateRomanNumeral('${i}')`);
    console.log(' ');
    console.log(`INPUT: ${i}`);
    console.log('EXPECTED: ', o[idx]);
    console.log('OUTPUT: ', translateRomanNumeral(i));
    console.log('------------------------------');
    console.log(' ');
  });
};

logger(inputs, expected);
