var o = {
  valueOf: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
});