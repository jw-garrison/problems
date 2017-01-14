/*
 *For this algorithm problem (non-repeated character),
 *our goal is to return the first non-repeating character
 *(given an arbitrary input string).
 *For strings with all repeats, we will return a default word
 *(in this case ‘sorry’).

 *Example inputs/outputs:

 *input: “ABCDBIRDUP”
 *output: “A”

 *input: “ALAMABA”
 *output: “L”

 *input: “XXXXXXX”
 *output: “sorry”

 *input: “BABA”
 *output: “sorr
 */

const firstUnique = (string) => {
  // Making sure that the input is a string.
  if ({}.toString.call(string).slice(8, -1) !== 'String') {
    return 'input is not a string';
  }

  const array = string.split('');
  if (array.length <= 0) {
    return 'sorry';
  }

  /*
   * grab an individual letter from the array,
   * check if the rest of the array has the same letter
   */

  for (let index = 0; index < array.length; index++) {
    const letter = array[index];
    const arrCopy = array.slice();
    arrCopy.splice(index, 1);

    if (arrCopy.indexOf(letter) === -1) {
      return letter;
    }
  }

  return 'sorry';
};

console.log(firstUnique(1));
console.log(firstUnique([]));
console.log(firstUnique({}));
console.log(firstUnique(true));
console.log(firstUnique(null));
console.log(firstUnique(undefined));
console.log(firstUnique(''));

console.log(firstUnique('ABCDBIRDUP')); // A
console.log(firstUnique('ALAMABA')); // L
console.log(firstUnique('XXXXXXX')); // sorry
console.log(firstUnique('BABA')); // sorry
console.log(firstUnique('Jiwook Garrison')); // J
console.log(firstUnique('aeiouae')); // i
