var iterable = {};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        get value() {},
        done: false
      };
    }
  };
};