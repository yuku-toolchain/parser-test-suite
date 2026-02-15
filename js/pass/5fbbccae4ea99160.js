var start = {
  valueOf: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA();
});