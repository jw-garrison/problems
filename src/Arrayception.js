const arrayception = (array) => {
  if (array.length === 0) return 0;

  let level = 0;

  const recurse = (arr) => {
    const filtered = arr.filter((element) => {
      return Array.isArray(element) === true;
    });
    console.log(arr, filtered);
    if (filtered.length === 0) {
      return level++;
    } else {
      filtered.forEach((element) => {
        recurse(element);
      });
    }
  };

  recurse(array);
  return level;
};

console.log(arrayception([]));
console.log(arrayception([ [ [ ] ] ]));
// console.log(arrayception([ 10, 20, 30, 40 ]));
// console.log(arrayception([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]))
