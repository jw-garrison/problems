const asyncMap = (tasks, callback) =>
  Promise.all(tasks.map(task => new Promise(task)))
    .then(callback);

asyncMap();
