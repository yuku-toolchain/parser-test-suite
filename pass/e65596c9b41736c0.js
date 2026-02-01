var obj = {
  constructor: function () {}
};
var callCount = 0;
var fakeRe = {
  set lastIndex(_) {},
  get lastIndex() {},
  exec: function () {
    callCount += 1;
    return [];
  }
};
obj.constructor[Symbol.species] = function () {
  return fakeRe;
};