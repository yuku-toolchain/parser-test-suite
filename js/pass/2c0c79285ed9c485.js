testWithBigIntTypedArrayConstructors(function (TA) {
  var OtherCtor = TA === BigInt64Array ? BigUint64Array : BigInt64Array;
  var sample = new OtherCtor();
  var ctor = {};
  sample.buffer.constructor = ctor;
  ctor[Symbol.species] = null;
  var typedArray = new TA(sample);
});