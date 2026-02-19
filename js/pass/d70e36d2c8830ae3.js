var values = byteConversionValues.values;
var expectedValues = byteConversionValues.expected.Float16;
values.forEach(function (value, i) {
  var expected = expectedValues[i];
  var result = Math.f16round(value);
});