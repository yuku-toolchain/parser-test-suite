var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([0n, 42n, 64n]);
  var iter = sample.keys();
});