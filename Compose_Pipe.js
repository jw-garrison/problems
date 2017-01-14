const compose = (...args) => {
  const functions = [...args];
  console.log(functions);
};

const greet = name => `hi: ${name}`;
const exclaim = statement => `${statement.toUpperCase()}!`;

const welcome = compose(greet, exclaim);
const result = welcome('phillip');

console.log(result);
