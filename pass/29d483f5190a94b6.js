testWithBigIntTypedArrayConstructors(function (TA) {
  let counter = 0;
  let sample = new TA(1);
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (count) {
    let other = new TA(count);
    counter++;
    $DETACHBUFFER(other.buffer);
    return other;
  };
});