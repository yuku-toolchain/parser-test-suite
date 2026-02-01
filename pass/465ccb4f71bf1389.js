var s1 = Symbol("foo");
var s2 = Symbol("bar");
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 43n]);
  Object.defineProperty(sample, s1, {
    value: "baz"
  });
  $DETACHBUFFER(sample.buffer);
});