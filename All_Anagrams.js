const allAnagrams = (string) => {
  return [...string].reduce((anagram, character, index, array) => {
    return [...anagram, ...character];
  }, []);
};

console.log(allAnagrams('abc'));


// var result = inputArray.reduce(function permute(res, item, key, arr) {
//   console.log(res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item););
//   return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);
// }, []);
