var obj = {
  constructor: function () {}
};
var poisonedLength = {
  get length() {}
};
var fakeRe = {
  exec: function () {
    return poisonedLength;
  }
};
obj.constructor[Symbol.species] = function () {
  return fakeRe;
};