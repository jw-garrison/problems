function reverseInteger (n) {
  let one = n % 10
  let oneR = Math.floor(n / 10);
  if (oneR !== 0) {
    one *= 10;
  }

  let ten = oneR % 10
  let tenR = Math.floor(oneR / 10);
  if (tenR !== 0) {
    one *= 10;
    ten *= 10;
  }

  console.log(one, ten);
}

console.log(reverseInteger(1234));
