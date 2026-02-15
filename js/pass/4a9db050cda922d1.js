testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n]);
  var calls = 0;
  var result;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (count) {
    calls++;
    return new TA(count);
  };
  result = sample.slice(1);
});