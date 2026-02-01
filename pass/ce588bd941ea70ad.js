var called = 0;
var obj = {
  valueOf: function () {
    called = NaN;
    return Infinity;
  },
  toString: function () {
    called = NaN;
    return Infinity;
  }
};
obj[Symbol.toPrimitive] = function () {
  called += 1;
  return 42;
};
called = 0;
obj[Symbol.toPrimitive] = function () {
  called += 1;
  return "this is not a number";
};
called = 0;
obj[Symbol.toPrimitive] = function () {
  called += 1;
  return true;
};
called = 0;
obj[Symbol.toPrimitive] = function () {
  called += 1;
  return false;
};
called = 0;
obj[Symbol.toPrimitive] = function () {
  called += 1;
  return NaN;
};