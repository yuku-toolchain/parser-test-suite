var coercions = 0;
var objectWithValueOf = {
  valueOf: function () {
    ++coercions;
  },
  toString: function () {
    ++coercions;
  }
};
var nextCalls = 0;
var returnCalls = 0;
var iterator = {
  next: function () {
    ++nextCalls;
    return {
      done: false,
      value: objectWithValueOf
    };
  },
  return: function () {
    ++returnCalls;
    return {};
  }
};
var iterable = {
  [Symbol.iterator]: function () {
    return iterator;
  }
};