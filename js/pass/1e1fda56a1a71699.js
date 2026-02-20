testWithBigIntTypedArrayConstructors(function (TA) {
  var called = false;
  var result = new TA([42n]).reduce(function () {
    called = true;
  });
});