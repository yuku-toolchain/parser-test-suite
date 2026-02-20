testWithBigIntTypedArrayConstructors(function (TA) {
  var sample1 = new TA(42);
  var loop = 0;
  Object.defineProperty(sample1, "length", {
    value: 1
  });
  sample1.forEach(function () {
    loop++;
  });
  var sample2 = new TA(7);
  loop = 0;
  Object.defineProperty(sample2, "length", {
    get: function () {}
  });
  sample2.forEach(function () {
    loop++;
  });
});