var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {}
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(2);
  $DETACHBUFFER(sample.buffer);
});