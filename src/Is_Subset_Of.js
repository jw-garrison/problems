Array.prototype.isSubsetOf = function (set) {
  const subset = new Set(this);
  const superSet = new Set(set);

  return !(new Set([...subset]
    .filter((element) => !superSet.has(element))).size);
};

console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']));
