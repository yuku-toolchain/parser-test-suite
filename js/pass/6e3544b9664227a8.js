var s = Symbol();
testWithBigIntTypedArrayConstructors(function (TA) {
  var typedArray = new TA(1);
});