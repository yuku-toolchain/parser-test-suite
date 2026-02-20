testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var result;
  sample.constructor = {};
  result = sample.map(function () {
    return 0n;
  });
  sample.constructor[Symbol.species] = null;
  result = sample.map(function () {
    return 0n;
  });
});