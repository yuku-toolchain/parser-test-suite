testWithBigIntTypedArrayConstructors(function (TA) {
  var sample1 = new TA(42);
  var loop = 0;
  Object.defineProperty(sample1, "length", {
    value: 1
  });
  sample1.map(function () {
    loop++;
    return 0n;
  });
  loop = 0;
  var sample2 = new TA(4);
  Object.defineProperty(sample2, "length", {
    get: function () {}
  });
  sample2.map(function () {
    loop++;
    return 0n;
  });
});