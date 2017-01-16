const isBalanced = (string) => {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === '(') {
      stack.push(string.charAt(i));
    } else if (string.charAt(i) === ')') {
      const popped = stack.pop();
      if (!popped) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const inputs = [
  '(50)(',
  ')()',
];

const expected = [
  false,
  false,
];

const logger = (is, o) => {
  is.forEach((i, idx) => {
    console.log('------------------------------');
    console.log(`${idx + 1}) allAnagrams('${i}')`);
    console.log(' ');
    console.log(`INPUT: ${i}`);
    console.log('EXPECTED: ', o[idx]);
    console.log('OUTPUT: ', isBalanced(i));
    console.log('------------------------------');
    console.log(' ');
  });
};

logger(inputs, expected);
