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


/* Recursive routine broken down

letters.forEach((char, index) => {
  const anagram = char;
  const remaining = str.slice(0, index) + str.slice(index + 1);
  const remainingLetter = remaining.split('');
  remainingLetter.forEach((char2, index2, array) => {
    const anagram2 = anagram + char2;
    const remaining2 = array.join('').slice(0, index2) + array.slice(index2 + 1);
    const remainingLetter2 = remaining2.split('');
    remainingLetter2.forEach((char3, index3, array3) => {
      const anagram3 = anagram2 + char3;
      anagrams.push(anagram3);
    });
  });
});

*/

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
