var handler = {
  has: function () {}
};
var proxy = new Proxy(TypedArray.prototype, handler);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  Object.setPrototypeOf(sample, proxy);
  Object.defineProperty(sample, "foo", {
    value: 42
  });
});