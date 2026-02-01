var r = /./;
var uncoercibleIndex = {
  index: {
    valueOf: function () {}
  }
};
r.exec = function () {
  return uncoercibleIndex;
};