testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  sample.constructor = {};
  sample.constructor[Symbol.species] = 0;
  sample.constructor[Symbol.species] = "string";
  sample.constructor[Symbol.species] = {};
  sample.constructor[Symbol.species] = NaN;
  sample.constructor[Symbol.species] = false;
  sample.constructor[Symbol.species] = true;
});