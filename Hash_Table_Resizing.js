var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;

  result.resize = function (newSize) {
    const prevStorage = storage;

    storageLimit = newSize;
    storage = new Array(newSize);
    size = 0;

    prevStorage.forEach((bucket) => {
      if (!bucket[0]) return;
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    });
  };

  result.insert = function (key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    pairs.forEach((pair) => {
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }

      return value;
    });

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }

    if (size >= storageLimit * 0.75) {
      // increase the size of the hash table
      this.resize(storageLimit * 2);
    }

    console.log(storage);
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) {
      return;
    }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key) {

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if (size <= storageLimit * 0.25) {
          // decrease the size of the hash table
          this.resize(storageLimit / 2);
        }

        return value;
      }
    }
  };

  result.find = function(index) {
    //return the bucket at a given index
    return storage[index];
  };

  return result;
};

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashTable = makeHashTable();
