var obj = {
  constructor: function () {}
};
var uncoercibleLength;
var fakeRe = {
  exec: function () {
    return {
      length: uncoercibleLength
    };
  }
};
obj.constructor[Symbol.species] = function () {
  return fakeRe;
};
uncoercibleLength = Symbol.split;
uncoercibleLength = {
  valueOf: function () {}
};