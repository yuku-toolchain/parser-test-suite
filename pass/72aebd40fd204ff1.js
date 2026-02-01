var obj = {};
var sym = Symbol();
var callCount = 0;
var wrapper = {
  toString: function () {
    callCount += 1;
    return sym;
  },
  valueOf: function () {}
};
obj[sym] = 0;