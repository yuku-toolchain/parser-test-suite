var s = Symbol("1");
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(42);
  [true, 1, "test262", s, {}, [], -1, Infinity, -Infinity, 0.1, -0.1].forEach(function (val) {
    var called = 0;
    var result = sample.some(function () {
      called++;
      if (called == 1) {
        return false;
      }
      return val;
    });
    var msg = "result is true - " + (val === s ? "symbol" : val);
  });
});