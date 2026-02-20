var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
var values = byteConversionValues.values;
var expectedValues = byteConversionValues.expected.Uint16;
values.forEach(function (value, i) {
  var expected = expectedValues[i];
  var result = sample.setUint16(0, value, false);
});