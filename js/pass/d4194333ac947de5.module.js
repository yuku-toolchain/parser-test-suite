testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  var result;
  sample.findLast(function () {
    result = this;
  });
  var o = {};
  sample.findLast(function () {
    result = this;
  }, o);
});