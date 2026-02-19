var s = Symbol("foo");
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
  Object.defineProperty(sample, s, {
    value: 42
  });
});