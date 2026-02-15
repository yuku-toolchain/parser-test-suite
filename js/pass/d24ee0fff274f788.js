testWithBigIntTypedArrayConstructors(function (TAConstructor) {
  var typedArray = new TAConstructor(new ArrayBuffer(8), -0);
});