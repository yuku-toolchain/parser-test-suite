testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n]);
  var calls = 0;
  var other, result;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (captured) {
    calls++;
    other = new TA(captured);
    return other;
  };
  result = sample.filter(function () {
    return true;
  });
});