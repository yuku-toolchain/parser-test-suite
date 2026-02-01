testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new Int8Array(1);
  var toPrimitive = 0;
  var valueOf = 0;
  sample[Symbol.toPrimitive] = function () {
    toPrimitive++;
    return {};
  };
  sample.valueOf = function () {
    valueOf++;
  };
});