testWithBigIntTypedArrayConstructors(function (TA) {
  let counter = 0;
  let sample, result, Other, other;
  let ctor = {};
  ctor[Symbol.species] = function (count) {
    counter++;
    Other = TA === BigInt64Array ? BigUint64Array : BigInt64Array;
    $DETACHBUFFER(sample.buffer);
    other = new Other(count);
    return other;
  };
  sample = new TA(0);
  sample.constructor = ctor;
  result = sample.slice();
  sample = new TA(4);
  sample.constructor = ctor;
  sample.slice(1, 1);
});