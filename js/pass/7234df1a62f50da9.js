var badLastIndex;
var obj = {
  constructor: function () {}
};
var fakeRe = {
  set lastIndex(_) {},
  get lastIndex() {
    return badLastIndex;
  },
  exec: function () {
    return [];
  }
};
obj.constructor[Symbol.species] = function () {
  return fakeRe;
};
badLastIndex = Symbol.split;
badLastIndex = {
  valueOf: function () {}
};