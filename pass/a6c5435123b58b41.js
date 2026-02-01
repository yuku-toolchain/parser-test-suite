var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      var result = {};
      Object.defineProperty(result, 'value', {
        get: function () {}
      });
      return result;
    }
  };
};