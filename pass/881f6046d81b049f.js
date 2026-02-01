var thisVals = [];
var nextResult = {
  done: false,
  value: {}
};
var nextNextResult = {
  done: false,
  value: {}
};
var firstReturnVal = {};
var secondReturnVal = {};
var mapFn = function (value, idx) {
  var returnVal = nextReturnVal;
  nextReturnVal = nextNextReturnVal;
  nextNextReturnVal = null;
  return returnVal;
};
var nextReturnVal = firstReturnVal;
var nextNextReturnVal = secondReturnVal;
var items = {};
var result;
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
result = Array.from(items, mapFn);