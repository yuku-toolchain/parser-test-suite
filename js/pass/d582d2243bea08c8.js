testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  var result;
  sample.constructor = {};
  result = sample.slice();
  sample.constructor[Symbol.species] = null;
  result = sample.slice();
});