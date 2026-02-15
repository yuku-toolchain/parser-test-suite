testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n, 43n]);
  function testRes(result, msg) {}
  testRes(sample.slice(0), "begin == 0");
  testRes(sample.slice(-4), "begin == -srcLength");
  testRes(sample.slice(-5), "begin < -srcLength");
  testRes(sample.slice(0, 4), "begin == 0, end == srcLength");
  testRes(sample.slice(-4, 4), "begin == -srcLength, end == srcLength");
  testRes(sample.slice(-5, 4), "begin < -srcLength, end == srcLength");
  testRes(sample.slice(0, 5), "begin == 0, end > srcLength");
  testRes(sample.slice(-4, 5), "begin == -srcLength, end > srcLength");
  testRes(sample.slice(-5, 5), "begin < -srcLength, end > srcLength");
});