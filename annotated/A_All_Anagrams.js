const allAnagrams = (str) => {
  // We Do not want duplicate anagrams in our output.
  // ie) allAnagrams(aa)  // should be ['aa'] not ['aa', 'aa']
  // And object is good way to keep track of/collect only the unique elements!
  const anagrams = {};

  // Using IIFE, and ES6 Default Parameters to save some lines :)
  // It's same as defining the function as usual and calling the function with those parameters.

  /* ie)

    const findAnagrams(acc, src) {
      // code that will find anagrams for us!
    }

    findAnagrams('', str)

  */

  // this is our recursive fucntion.'
  // It takes two parameter, accumulator(acc) and source(src)
  // They are both strings
  // We want to build the accumulator string so that it will be an anagram of source string

  (function findAnagrams(acc = '', src = str) {
    // This if statement is the base case for our recursive function.
    // It will make sense more later but to explain what we are doing here:
    // We are checking if our source string is an empty string by checking its length
    // Since we are building accumulator FROM source string, if source string is empty...
    //  it would mean that we are done with building accumulator string.... which is to say.....
    // .we found an anagram!

    // If that's confusing,
    // it is same as checking the length of accumulator string is same as the original input string
    //  since anagram of a word should have the same length as word itself!
    // ie) if(acc.length === str.length)

    // Lastly this line helps with making sure we wont end up with duplicate anagrams

    if (!src.length) anagrams[acc] = true;

    // Using ES6 spread operator to turn source string into an array so that we can use forEach
    // it's same as str.split('')
    [...src].forEach((curr, i) => {
      // as we iterator through the string,
      // we'll add the current letter to the accumulator string.
      const newAcc = acc + curr;
      // then we want to construct the new source string by removing the current letter from it..
      // since we already used it and we don't want it to be used more than once.
      // we are going to do this by using slice method..
      // grab the part that comes before the current letter, and the part after then add the two!
      const newSrc = src.slice(0, i) + src.slice(i + 1);

      // we can now recurse with the value of accumulator string so far, and the new source string..
      // so that we can keep build our accmulator string to the desired length
      // and removing a letter at a time from our source string!
      findAnagrams(newAcc, newSrc);
    });
  }());


  // finally now that we found all anangrams let's turn the objects keys into an array!
  return Object.keys(anagrams);
};

allAnagrams();


/* Recursive routine broken down
Notice we have to do the same thing over and over again... recursion!

[...src1].forEach((cur1, idx1) => {
  const newAcc1 = '' + cur1;
  const newSrc1 = src1.slice(0, idx1) + src1.slice(idx1 + 1);
  [...newSrc1].forEach((cur2, idx2) => {
    const newAcc2 = newAcc1 + cur2;
    const newSrc2 = newSrc1.slice(0, idx2) + newSrc1.slice(idx2 + 1);
    [...newSrc2].forEach((cur3, idx3) => {
      const newAcc3 = newAcc2 + cur3;
      const newSrc3 = newSrc2.slice(0, idx3) + newSrc2.slice(idx3 + 1);
      [...newSrc3].forEach((cur4, indx4) => {

      })
      .
      .
      so on and so forth until we have an anagram
    });
  });
});

*/
