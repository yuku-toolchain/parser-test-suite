testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n]);
  var calls = 0;
  var other, result;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (len) {
    calls++;
    other = new TA(len);
    return other;
  };
  result = sample.map(function (a) {
    return a + 7n;
  });
});