testWithBigIntTypedArrayConstructors(function (TA) {
  var typedArray = new TA(1);
  typedArray[0] = '';
  typedArray[0] = '1';
});