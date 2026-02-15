const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "trunc"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "trunc"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "trunc"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "trunc"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "trunc"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "trunc"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "trunc"
});