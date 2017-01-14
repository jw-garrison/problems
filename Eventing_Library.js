const mixEvents = (obj) => {
  const events = {};

  obj.trigger = (event, ...args) => {
    if (events[event]) {
      events[event].forEach((callback) => {
        callback.apply(this, args);
      });
    }
  };

  obj.on = (event, callback) => {
    events[event] = events[event] || [];
    events[event].push(callback);
  };

  return obj;
};
var dinner = mixEvents({});
var result;
dinner.on('order', function(dish, side) {
  result = dish + " with a side of " + side;
});
dinner.trigger('order', "spam", "spinach");

//result.should.equal("spam with a side of spinach");
console.log(result);
