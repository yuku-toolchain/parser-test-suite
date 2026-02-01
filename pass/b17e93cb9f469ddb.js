testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n]);
  Object.defineProperty(sample, 'foo', {
    writable: false,
    value: undefined
  });
});