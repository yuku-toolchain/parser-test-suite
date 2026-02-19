var result;
var obj = {
  constructor: function () {}
};
var poisonedCapture = {
  length: 3,
  0: 'a',
  1: 'b',
  get 2() {}
};
var fakeRe = {
  exec: function () {
    fakeRe.lastIndex = 1;
    return poisonedCapture;
  }
};
obj.constructor[Symbol.species] = function () {
  return fakeRe;
};