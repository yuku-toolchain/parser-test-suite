var r = /./;
var uncoercibleLength = {
  length: {
    valueOf: function () {}
  }
};
r.exec = function () {
  return uncoercibleLength;
};