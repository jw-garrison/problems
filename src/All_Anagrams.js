const allAnagrams = (str) => {
  const anagrams = {};

  (function findAnagrams(acc = '', src = str) {
    if (!src.length) anagrams[acc] = true;

    [...src].forEach((curr, i) => {
      const newAcc = acc + curr;
      const newSrc = src.slice(0, i) + src.slice(i + 1);
      findAnagrams(newAcc, newSrc);
    });
  }());

  return Object.keys(anagrams);
};

const inputs = [
  'a',
  'abc',
  'ab',
  'apps',
];

const expected = [
  ['a'],
  ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'],
  ['ab', 'ba'],
  ['apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa'],
];

const logger = (is, o) => {
  is.forEach((i, idx) => {
    console.log('------------------------------');
    console.log(`${idx + 1}) allAnagrams(${i})`);
    console.log(' ');
    console.log(`INPUT: ${i}`);
    console.log('EXPECTED: ', o[idx]);
    console.log('OUTPUT: ', allAnagrams(i));
    console.log('------------------------------');
    console.log(' ');
  });
};

logger(inputs, expected);
