testWithBigIntTypedArrayConstructors(function (TAConstructor) {
  var typedArray = new TAConstructor(new SharedArrayBuffer(8), -0);
});