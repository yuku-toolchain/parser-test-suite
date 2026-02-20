const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfFloor"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfFloor"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfFloor"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfFloor"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "halfFloor"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfFloor"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "halfFloor"
});