testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var result;
  sample.constructor = {};
  result = sample.filter(function () {});
  sample.constructor[Symbol.species] = null;
  result = sample.filter(function () {});
});