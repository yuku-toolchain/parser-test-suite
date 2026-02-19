var r = /./;
var uncoercibleValue = {
  length: 2,
  1: {
    toString: function () {}
  }
};
r.exec = function () {
  return uncoercibleValue;
};