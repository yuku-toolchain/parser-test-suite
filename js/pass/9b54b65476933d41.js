var result;
var obj = {
  constructor: function () {}
};
var fakeRe = {
  set lastIndex(_) {},
  get lastIndex() {
    return {
      valueOf: function () {
        return 2.9;
      }
    };
  },
  exec: function () {
    return [];
  }
};
obj.constructor[Symbol.species] = function () {
  return fakeRe;
};
result = RegExp.prototype[Symbol.split].call(obj, 'abcd');