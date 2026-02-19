var proto = TypedArray.prototype;
Object.defineProperty(proto, "-0", {
  get: function () {}
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
});