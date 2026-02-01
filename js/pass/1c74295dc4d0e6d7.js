const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfTrunc"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfTrunc"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfTrunc"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfTrunc"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "halfTrunc"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfTrunc"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "halfTrunc"
});