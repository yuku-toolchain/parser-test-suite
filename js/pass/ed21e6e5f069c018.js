var obj = {};
var sym = Symbol();
var callCount = 0;
var wrapper = {
  valueOf: function () {
    callCount += 1;
    return sym;
  },
  toString: null
};
obj[sym] = 0;