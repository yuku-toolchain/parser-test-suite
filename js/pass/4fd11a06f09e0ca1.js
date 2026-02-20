testWithBigIntTypedArrayConstructors(function (TA) {
  let counter = 0;
  var sample = new TA(1);
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (count) {
    var other = TA === BigInt64Array ? BigUint64Array : BigInt64Array;
    counter++;
    $DETACHBUFFER(sample.buffer);
    return new other(count);
  };
});