const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "expand"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "expand"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "expand"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "expand"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "expand"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "expand"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "expand"
});