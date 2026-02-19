var proto = TypedArray.prototype;
var throwDesc = {
  get: function () {}
};
Object.defineProperty(proto, "0", throwDesc);
Object.defineProperty(proto, "1", throwDesc);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 1n]);
});