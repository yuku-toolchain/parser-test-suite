testWithBigIntTypedArrayConstructors(function (TA) {
  var result = TA.from([42n, 43n, 42n]);
});