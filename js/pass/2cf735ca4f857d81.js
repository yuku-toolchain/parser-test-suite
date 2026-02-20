testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  var calls = 0;
  var result;
  Object.defineProperty(TA.prototype, "constructor", {
    get: function () {
      calls++;
    }
  });
  result = sample.slice();
  calls = 6;
  result.constructor;
});