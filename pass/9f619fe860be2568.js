testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 42n]);
  var desc = Object.getOwnPropertyDescriptor(sample, '0');
});