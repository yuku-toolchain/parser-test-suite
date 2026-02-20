var fromIndex = {
  valueOf: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([7n]);
});