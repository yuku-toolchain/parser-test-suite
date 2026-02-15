TypedArray.prototype[1] = "test262";
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(1);
});