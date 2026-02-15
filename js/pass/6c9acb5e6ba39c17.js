var iterable = {};
var iterator = {
  next: function () {
    return {
      done: true
    };
  },
  return: function () {
    return null;
  }
};
iterable[Symbol.iterator] = function () {
  return iterator;
};