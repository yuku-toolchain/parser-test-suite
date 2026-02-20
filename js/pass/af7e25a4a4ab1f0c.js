testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  var ctor = function (len) {
    called++;
    return new TA(len);
  };
  var result = TA.of.call(ctor, 42n, 43n, 42n);
});