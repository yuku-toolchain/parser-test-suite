var items = {};
var firstIterResult = {
  done: false,
  value: {}
};
var secondIterResult = {
  done: false,
  value: {}
};
var thirdIterResult = {
  done: true,
  value: {}
};
var nextIterResult = firstIterResult;
var nextNextIterResult = secondIterResult;
var result;
items[Symbol.iterator] = function () {
  return {
    next: function () {
      var result = nextIterResult;
      nextIterResult = nextNextIterResult;
      nextNextIterResult = thirdIterResult;
      return result;
    }
  };
};
result = Array.from(items);