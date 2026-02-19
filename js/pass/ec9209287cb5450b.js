var args = [];
var firstResult = {
  done: false,
  value: {}
};
var secondResult = {
  done: false,
  value: {}
};
var mapFn = function (value, idx) {
  args.push(arguments);
};
var items = {};
var nextResult = firstResult;
var nextNextResult = secondResult;
items[Symbol.iterator] = function () {
  return {
    next: function () {
      var result = nextResult;
      nextResult = nextNextResult;
      nextNextResult = {
        done: true
      };
      return result;
    }
  };
};
Array.from(items, mapFn);