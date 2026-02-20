var desc = {
  value: 0n,
  configurable: false,
  enumerable: true,
  writable: true
};
var obj = {
  valueOf: function () {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(42);
  $DETACHBUFFER(sample.buffer);
});