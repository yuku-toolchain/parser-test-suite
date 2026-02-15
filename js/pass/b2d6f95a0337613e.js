var items = {};
var result, nextIterResult, lastIterResult;
items[Symbol.iterator] = function () {
  return {
    next: function () {
      var result = nextIterResult;
      nextIterResult = lastIterResult;
      return result;
    }
  };
};
nextIterResult = lastIterResult = {
  done: true
};
result = Array.from(items);
nextIterResult = {
  done: false
};
lastIterResult = {
  done: true
};
result = Array.from(items);