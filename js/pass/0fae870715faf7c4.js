var o1 = {
  valueOf: function () {}
};
var o2 = {
  toString: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
});