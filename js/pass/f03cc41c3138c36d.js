var T = this;
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  var result;
  sample.findIndex(function () {
    result = this;
  });
  result = null;
  sample.findIndex(function () {
    result = this;
  }, undefined);
  var o = {};
  result = null;
  sample.findIndex(function () {
    result = this;
  }, o);
});