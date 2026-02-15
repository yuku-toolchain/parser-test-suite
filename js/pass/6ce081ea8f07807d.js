testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n]);
  var calls = 0;
  var result;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (buffer, offset, length) {
    calls++;
    return new TA(buffer, offset, length);
  };
  result = sample.subarray(1);
});