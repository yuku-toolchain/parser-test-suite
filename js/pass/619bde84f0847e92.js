var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
var values = byteConversionValues.values;
values.forEach(function (value, i) {
  if (value === undefined) {
    return;
  } else if (!Number.isInteger(value)) {
    return;
  }
  var result = sample.setBigInt64(0, BigInt(value), false);
});