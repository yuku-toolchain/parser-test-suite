testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new Int8Array(1);
  var valueOf = 0;
  var toString = 0;
  sample.valueOf = function () {
    valueOf++;
    return {};
  };
  sample.toString = function () {
    toString++;
  };
});