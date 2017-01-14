const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

// if (n % 100 === 0) {
//   return `${inWords(hundreds)} hundred`;
// } else if (inWords(tenth)) {
//   return `${inWords(hundreds)} hundred ${inWords(tenth)}`;
// }
//
// tenth = Math.floor((n - (hundreds * 100)) / 10) * 10;
// const ones = n - (hundreds * 100) - tenth;
// return `${inWords(hundreds)} hundred ${inWords(tenth)}-${inWords(ones)}`;

// -----> Turn a number into a word;
const inWords = (n) => (
  n % 100 === 0 ? numbersToPlace[n] : numbersToWords[n]
);

// -----> Numbers from 0 - 99
const upTo99 = (n) => {
  if (inWords(n)) return (inWords(n));

  const tens = Math.floor(n / 10) * 10;
  const ones = n - tens;

  return `${inWords(tens)}-${inWords(ones)}`;
};

// -----> Numbers from 100 - 999
const upTo999 = (n) => {
  const hundreds = Math.floor(n / 100);
  const tenth = n - (hundreds * 100);

  let words = `${inWords(hundreds)} hundred`;

  if (tenth !== 0) {
    words += ` ${upTo99(tenth)}`;
  }

  return words;
};

const numberToEnglish = (number) => {
  if (number === 0) return 'zero';
  else if (number < 100) return upTo99(number);
  else if (number < 1000) return upTo999(number);

  let place = 1000;

  while (place * 1000 <= number) {
    place *= 1000;
  }

  const placeNum = Math.floor(number / place);
  const rest = number % place;

  let words = `${numberToEnglish(placeNum)} ${inWords(place)}`;
  const restInEnglish = numberToEnglish(rest);

  if (restInEnglish !== 'zero') {
    words += ` ${restInEnglish}`;
  }

  return words;
};

console.log(numberToEnglish(7), 'expected: seven');
console.log(numberToEnglish(12), 'expected: twelve');
console.log(numberToEnglish(100), 'expected: one hundred');
console.log(numberToEnglish(112), 'expected: one hundred tweleve');
console.log(numberToEnglish(25), 'expected: twenty-five');
console.log(numberToEnglish(490), 'expected: four hundred hundred ninety');
console.log(numberToEnglish(575), 'expected: five hundred seventy-five');
console.log(numberToEnglish(700), 'expected: seven hundred');
console.log(numberToEnglish(1000), 'expected: one thousand');
console.log(numberToEnglish(17490), 'expected: seventeen thousand four hundred ninety');
console.log(numberToEnglish(78193512),
  'expected: seventy-eight million one hundred ninety-three thousand five hundred twelve'
);
