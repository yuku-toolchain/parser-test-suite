var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {}
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([1n, 2n, 3n]);
});