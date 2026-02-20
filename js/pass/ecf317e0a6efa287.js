var T = this;
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  var result;
  sample.findLast(function () {
    result = this;
  });
  result = null;
  sample.findLast(function () {
    result = this;
  }, undefined);
  var o = {};
  result = null;
  sample.findLast(function () {
    result = this;
  }, o);
});