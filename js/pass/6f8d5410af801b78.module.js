testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  var result;
  sample.findLastIndex(function () {
    result = this;
  });
  var o = {};
  sample.findLastIndex(function () {
    result = this;
  }, o);
});