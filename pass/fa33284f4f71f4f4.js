testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  var calls = 0;
  var result;
  Object.defineProperty(TA.prototype, "constructor", {
    get: function () {
      calls++;
    }
  });
  result = sample.map(function () {
    return 0n;
  });
  calls = 6;
  result.constructor;
});