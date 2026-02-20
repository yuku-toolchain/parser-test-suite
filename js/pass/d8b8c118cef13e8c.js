testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  function testRes(result, msg) {}
  testRes(sample.subarray(0), "begin == 0");
  testRes(sample.subarray(-4), "begin == -srcLength");
  testRes(sample.subarray(-5), "begin < -srcLength");
  testRes(sample.subarray(0, 4), "begin == 0, end == srcLength");
  testRes(sample.subarray(-4, 4), "begin == -srcLength, end == srcLength");
  testRes(sample.subarray(-5, 4), "begin < -srcLength, end == srcLength");
  testRes(sample.subarray(0, 5), "begin == 0, end > srcLength");
  testRes(sample.subarray(-4, 5), "begin == -srcLength, end > srcLength");
  testRes(sample.subarray(-5, 5), "begin < -srcLength, end > srcLength");
});