commonCharacters = function(string1, string2){
  const set1 = new Set([...string1]);
  const set2 = new Set([...string2]);

  console.log(set1, set2);

  const intersection = [...set1].filter(char => {
    return /\S/.test(char) && set2.has(char);
  }).join('');

  return intersection;
};

console.log(commonCharacters("What is love?", "Baby don't hurt me"));
