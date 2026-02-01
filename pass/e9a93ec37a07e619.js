testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(4);
  var ctor = {};
  sample.buffer.constructor = ctor;
  ctor[Symbol.species] = undefined;
  var typedArray = new TA(sample);
});