function characterFrequency (string) {
  if (!string) {
    return [];
  } else if (string.length === 1) {
    return [[string, 1]];
  }

  const frequencies = {};
  const letters = [...string];
  letters.forEach((letter) => {
    if (!frequencies[letter]) {
      frequencies[letter] = 1;
    } else {
      frequencies[letter]++;
    }
  });

  const characters = Object.keys(frequencies);

  return characters.map((character) => [character, frequencies[character]])
                    .sort((a, b) => {
                      if (a[1] === b[1]) {
                        if (a[0] > b[0]) {
                          return 1;
                        }

                        if (a[0] < b[0]) {
                          return -1;
                        }
                      }

                      return b[1] - a[1];
                    });
}

console.log(characterFrequency(''));
console.log(characterFrequency('a'));
console.log(characterFrequency('aaabbc'));
console.log(characterFrequency('mississippi'));
console.log(characterFrequency('popopo'));
console.log(characterFrequency('yzbzy'));
console.log(characterFrequency('supercalifragilisticexpialidocious'));
