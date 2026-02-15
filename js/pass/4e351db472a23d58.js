var obj1 = {
  valueOf: function () {}
};
var obj2 = {
  toString: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
});