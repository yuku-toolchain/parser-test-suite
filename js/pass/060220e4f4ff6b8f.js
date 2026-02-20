var thisVal, args;
var callCount = 0;
var C = function () {
  thisVal = this;
  args = arguments;
  callCount += 1;
};
var result;
var items = {};
items[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        done: true
      };
    }
  };
};
result = Array.from.call(C, items);