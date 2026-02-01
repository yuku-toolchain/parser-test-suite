var callCount = 0, _this, _arguments;
var result = [];
var obj = {
  toISOString: function () {
    return result;
  },
  toString: function () {},
  valueOf: function () {
    callCount += 1;
    _this = this;
    _arguments = arguments;
    return 'NaN';
  }
};