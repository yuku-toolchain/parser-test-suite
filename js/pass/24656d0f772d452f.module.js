testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  var result;
  sample.findIndex(function () {
    result = this;
  });
  var o = {};
  sample.findIndex(function () {
    result = this;
  }, o);
});