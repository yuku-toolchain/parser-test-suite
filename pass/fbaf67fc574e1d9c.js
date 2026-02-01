var callCount = 0, _this, _arguments;
var result = new Boolean(false);
var obj = {
  toISOString: function () {
    return result;
  },
  toString: function () {},
  valueOf: function () {}
};
obj[Symbol.toPrimitive] = function () {
  callCount += 1;
  _this = this;
  _arguments = arguments;
  return 3.14;
};