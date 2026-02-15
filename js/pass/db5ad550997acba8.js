testWithBigIntTypedArrayConstructors(function (TA) {
  var called = 0;
  var values = [true, 1, "test262", Symbol("1"), {}, [], -1, Infinity, -Infinity, 0.1, -0.1];
  var sample = new TA(values.length);
  var result = sample.every(function () {
    called++;
    return values.unshift();
  });
});