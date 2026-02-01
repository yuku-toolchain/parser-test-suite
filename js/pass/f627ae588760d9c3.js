var thisVals = [];
var nextResult = {
  done: false,
  value: {}
};
var nextNextResult = {
  done: false,
  value: {}
};
var mapFn = function () {
  thisVals.push(this);
};
var items = {};
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