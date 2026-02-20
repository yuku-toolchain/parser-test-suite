var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
var values = byteConversionValues.values;
var expectedValues = byteConversionValues.expected.Uint32;
values.forEach(function (value, i) {
  var expected = expectedValues[i];
  var result = sample.setUint32(0, value, false);
});