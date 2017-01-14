const checkPalindrome = (string) => {
  const reversed = string.split('').reverse().join('');
  return string === reversed;
};

const longestPalindrome = (string) => {
  let longest = '';

  if (checkPalindrome(string)) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    for (let j = string.length - 1; j > -1; j--) {
      const substring = string.substring(j, i);
      if (checkPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
};

console.log(longestPalindrome('aibohphobia'));
console.log(longestPalindrome('My dad is a racecar athlete'));
