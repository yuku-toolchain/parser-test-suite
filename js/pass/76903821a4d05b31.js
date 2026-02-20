const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfCeil"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfCeil"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfCeil"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfCeil"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "halfCeil"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfCeil"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "halfCeil"
});