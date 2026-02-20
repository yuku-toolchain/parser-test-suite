const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "ceil"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "ceil"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "ceil"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "ceil"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "ceil"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "ceil"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "ceil"
});