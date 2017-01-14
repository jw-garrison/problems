/*

  Rock Paper Permutation
  Given a number of rounds n, return all the possible rock-paper-scissors play possibilities
  for that number of rounds.

  Examples
  Input	Output
  roundCount:
  1	[ "r", "p", "s" ]
  roundCount:
  2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
  roundCount:
  0	[ ]

  Make and Rock Paper Scissors array. rps = ['r', 'p', 's']

*/

/* Solution
 *
 * think of permutations as a tree! and draw a tree
 *
*/

function rockPaperPermutation(roundCount) {

  if (roundCount <= 0) {
    return [];
  }

  const permutations = [];
  const hands = ['r', 'p', 's'];

  function logPermutations(round, play) {
    if (round === 0) {
      return permutations.push(play);
    }

    for (let index = 0; index < hands.length; index++) {
      const hand = hands[index];
      logPermutations(round - 1, play + hand);
    }

    return undefined;
  }

  logPermutations(roundCount, '');
  return permutations;
}

console.log('rockPaperPermutation(0): ', rockPaperPermutation(0));
console.log('rockPaperPermutation(1): ', rockPaperPermutation(1));
console.log('rockPaperPermutation(2): ', rockPaperPermutation(2));
console.log('rockPaperPermutation(3): ', rockPaperPermutation(3));
console.log('rockPaperPermutation(4): ', rockPaperPermutation(4));
console.log('rockPaperPermutation(5): ', rockPaperPermutation(5));
console.log('rockPaperPermutation(6): ', rockPaperPermutation(6));
console.log('rockPaperPermutation(6): ', rockPaperPermutation(-1));
console.log('rockPaperPermutation([]): ', rockPaperPermutation([]));
console.log('rockPaperPermutation("-1"): ', rockPaperPermutation('1'));
console.log('rockPaperPermutation({}): ', rockPaperPermutation({}));
