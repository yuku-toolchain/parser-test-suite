var obj = {
  constructor: function () {}
};
var indices = '';
var fakeRe = {
  set lastIndex(val) {
    indices += val + ',';
  },
  exec: function () {
    return null;
  }
};
obj.constructor[Symbol.species] = function () {
  return fakeRe;
};
RegExp.prototype[Symbol.split].call(obj, 'abcd');