var r = /./;
var uncoercibleValue = {
  0: {
    toString: function () {}
  }
};
r.exec = function () {
  return uncoercibleValue;
};