var T = this;
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  var result;
  sample.find(function () {
    result = this;
  });
  result = null;
  sample.find(function () {
    result = this;
  }, undefined);
  var o = {};
  result = null;
  sample.find(function () {
    result = this;
  }, o);
});