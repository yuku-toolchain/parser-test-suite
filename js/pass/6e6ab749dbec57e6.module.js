testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  var result;
  sample.find(function () {
    result = this;
  });
  var o = {};
  sample.find(function () {
    result = this;
  }, o);
});