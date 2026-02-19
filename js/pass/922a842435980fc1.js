var obj = {
  valueOf: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n]);
});