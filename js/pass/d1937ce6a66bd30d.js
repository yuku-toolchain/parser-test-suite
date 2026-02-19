testWithBigIntTypedArrayConstructors(function (TA) {
  let counter = 0;
  let sample, result, other;
  let ctor = {};
  ctor[Symbol.species] = function (count) {
    counter++;
    $DETACHBUFFER(sample.buffer);
    other = new TA(count);
    return other;
  };
  sample = new TA(0);
  sample.constructor = ctor;
  result = sample.slice();
  sample = new TA(4);
  sample.constructor = ctor;
  result = sample.slice(1, 1);
});