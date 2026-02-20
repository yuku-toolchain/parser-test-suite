testWithBigIntTypedArrayConstructors(function (TA) {
  var obj = {
    length: 4,
    "0": 42n,
    "1": 43n,
    "2": {
      valueOf: function () {}
    },
    "3": 44n
  };
  var sample = new TA([1n, 2n, 3n, 4n]);
});