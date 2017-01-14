const bind = function (func, context, ...args) {
  return function (...innerArgs) {
    const allArgs = [...args, ...innerArgs];
    return func.apply(context, allArgs);
  };
};


Function.prototype.bind = function(context, ...args) {
  const _this = this;
  return function () {
    return _this.apply(context, args);
  };
};

var func = function(arg1){
  return arg1
};

var context = null;
var boundFunc = func.bind(context, "foobar");
console.log(boundFunc);
var result = boundFunc();
console.log(result);
