var obj = {
  toString: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
});