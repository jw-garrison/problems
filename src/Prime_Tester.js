/*

Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1.
Write a function that accepts a number and returns true if it’s a prime number,
false if it’s not. The grader is looking at the efficiency of your solution (number of operations)
as well as correctness!

Parameters:

n (required) - a number.

Examples
Input	Output
n:
2	true
n:
1	false

*/

function primeTester(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }

  if (n < 4) {
    return true;
  }

  if (!(n & 1)) {
    return false;
  }

  for (let factor = 3; factor <= Math.sqrt(n); factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }

  return true;
}

console.log('0', primeTester(0));
console.log('1', primeTester(1));
console.log('1', primeTester(1.5));
console.log('2', primeTester(2));
console.log('1', primeTester(2.5));
console.log('3', primeTester(3));
console.log('4', primeTester(4));
console.log('5', primeTester(5));
console.log('6', primeTester(6));
console.log('1', primeTester(6.5));
console.log('7', primeTester(7));
console.log('8', primeTester(8));
console.log('9', primeTester(9));
console.log('11', primeTester(11));
console.log('239812076741689', primeTester(239812076741689));
