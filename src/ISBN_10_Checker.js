function validateISBN(string) {
  if (string.length !== 10 || string.length !== 13) return false;
  const pattern = /[0-9]+[- ][0-9]+[- ][0-9]+[- ][0-9]*[- ]*[xX0-9]/;
  const validate = pattern.exec(string);
  console.log(validate);
  if (!validate) {
    return false;
  }

  return true;
}

console.log(validateISBN('044X01829X'));
console.log(validateISBN('14493607267'));
console.log(validateISBN('0-3870-0178-6'));
console.log(validateISBN('99-440-18293-0'));
