testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var result;
  sample.constructor = {};
  result = sample.subarray(0);
  sample.constructor[Symbol.species] = null;
  result = sample.subarray(0);
});