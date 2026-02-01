testWithBigIntTypedArrayConstructors(function (TA) {
  let counter = 0;
  let sample = new TA(1);
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (count) {
    counter++;
    $DETACHBUFFER(sample.buffer);
    return new TA(count);
  };
});