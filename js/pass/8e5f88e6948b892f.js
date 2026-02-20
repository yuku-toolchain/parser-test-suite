var constructorSetsIndex0ConfigurableFalse = function () {
  Object.defineProperty(this, '0', {
    writable: true,
    configurable: false
  });
};
var closeCount = 0;
var items = {};
var nextResult = {
  done: false
};
items[Symbol.iterator] = function () {
  return {
    return: function () {
      closeCount += 1;
    },
    next: function () {
      var result = nextResult;
      nextResult = {
        done: true
      };
      return result;
    }
  };
};