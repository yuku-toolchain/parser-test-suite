var thisVal, args, result;
var re = /x/iy;
re.constructor = function () {};
re.constructor[Symbol.species] = function () {
  thisVal = this;
  args = arguments;
  return /[db]/y;
};
result = RegExp.prototype[Symbol.split].call(re, 'abcde');