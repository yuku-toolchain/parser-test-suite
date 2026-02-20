testWithBigIntTypedArrayConstructors(function (TA) {
  var typedArray = new TA(2);
  typedArray.set([false, true]);
});