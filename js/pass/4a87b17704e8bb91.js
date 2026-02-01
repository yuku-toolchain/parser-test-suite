var T = this;
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  var result;
  sample.findLastIndex(function () {
    result = this;
  });
  result = null;
  sample.findLastIndex(function () {
    result = this;
  }, undefined);
  var o = {};
  result = null;
  sample.findLastIndex(function () {
    result = this;
  }, o);
});