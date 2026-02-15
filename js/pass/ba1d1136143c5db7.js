testWithBigIntTypedArrayConstructors(function (TA) {
  var obj = {
    length: 4,
    "0": 42n,
    "1": 43n,
    "3": 44n
  };
  Object.defineProperty(obj, "2", {
    get: function () {}
  });
  var sample = new TA([1n, 2n, 3n, 4n]);
});