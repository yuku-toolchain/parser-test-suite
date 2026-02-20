var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};