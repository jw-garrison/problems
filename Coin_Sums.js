const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const coinSums = (total) => {
  let permutation = 0;

  const getPermutations = (index, value) => {
    let currentTotal = value;
    const coin = coins[index];

    console.log(`currentTotal: ${currentTotal} // coin ${coin}`);
    if (!index && !(currentTotal % coin)) {
      permutation++;
      console.log(`permutation incremented ${permutation}`)
    } else {
      while (currentTotal >= 0) {
        getPermutations(index - 1, currentTotal);
        currentTotal -= coin;
      }
    }
  };

  getPermutations(coins.length - 1, total);
  return permutation;
};

// console.log(coinSums(1), ' Expected: 1');
// console.log(coinSums(2), ' Expected: 2');
// console.log(coinSums(3), ' Expected: 2');
// console.log(coinSums(4), ' Expected: 3');
// console.log(coinSums(5), ' Expected: 4');
console.log(coinSums(45), ' Expected: 328');
// console.log(coinSums(80), ' Expected: 2064');
// console.log(coinSums(200))

// const coinSums = (total) => {
//   let combinations = 0;
//
//   const getCombination = (currentTotal) => {
//     let maxIndex = 0;
//     let maxCoin = coins[maxIndex];
//     while (maxCoin <= currentTotal) {
//       maxIndex++;
//       maxCoin = coins[maxIndex];
//     }
//
//     for (let index = 0; index < maxIndex; index++) {
//       const coin = coins[index];
//       const divisor = Math.floor(currentTotal / coin);
//       const remainder = currentTotal % coin;
//       combinations++;
//       console.log('combinations: ', combinations);
//       console.log(`currentTotal: ${currentTotal}, coin: ${coin} multiplier: ${divisor}, remainder: ${remainder}`);
//
//       if (coin !== 1 && divisor !== 1) {
//         console.log('++++++ recursing on', divisor);
//         return getCombination(divisor);
//       }
//
//       if (remainder !== 1 && remainder !== 0) {
//         console.log('------');
//         return getCombination(remainder);
//       }
//     }
//   };
//
//   getCombination(total)
//   return combinations
// };
