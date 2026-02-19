testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  Object.defineProperty(sample, "constructor", {
    get: function () {}
  });
});