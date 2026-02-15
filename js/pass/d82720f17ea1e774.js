testWithBigIntTypedArrayConstructors(function (TA) {
  var obj = (function* () {
    yield 7n;
    yield 42n;
  })();
  var typedArray = new TA(obj);
});