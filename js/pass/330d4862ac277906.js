var proto = TypedArray.prototype;
Object.defineProperty(proto, "1.1", {
  get: function () {}
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
});