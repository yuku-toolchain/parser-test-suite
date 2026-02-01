var iterable = {};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};