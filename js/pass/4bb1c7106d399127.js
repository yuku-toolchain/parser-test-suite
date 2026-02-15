var result;
var obj = {
  constructor: function () {}
};
var fakeRe = {
  exec: function () {
    fakeRe.lastIndex = 1;
    return {
      length: {
        valueOf: function () {
          return 2.9;
        }
      },
      0: 'foo',
      1: 'bar',
      2: 'baz'
    };
  }
};
obj.constructor[Symbol.species] = function () {
  return fakeRe;
};
result = RegExp.prototype[Symbol.split].call(obj, 'a');