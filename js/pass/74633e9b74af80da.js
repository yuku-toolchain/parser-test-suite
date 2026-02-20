testWithBigIntTypedArrayConstructors(function (TA) {
  var typedArray = new TA(2);
  typedArray[0] = false;
  typedArray[1] = true;
});