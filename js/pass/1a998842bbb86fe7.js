var calls = [];
var replacer = function (key, value) {
  if (key !== '') {
    calls.push([this, key, value]);
  }
  return value;
};
var b1 = [1, 2];
var b2 = {
  c1: true,
  c2: false
};
var a1 = {
  b1: b1,
  b2: {
    toJSON: function () {
      return b2;
    }
  }
};
var obj = {
  a1: a1,
  a2: 'a2'
};