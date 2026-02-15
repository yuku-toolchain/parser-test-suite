const duration = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 123, 987, 500);
const result1 = duration.toString({
  smallestUnit: "microsecond",
  roundingMode: "trunc"
});
const result2 = duration.toString({
  fractionalSecondDigits: 6,
  roundingMode: "trunc"
});
const result3 = duration.toString({
  smallestUnit: "millisecond",
  roundingMode: "trunc"
});
const result4 = duration.toString({
  fractionalSecondDigits: 3,
  roundingMode: "trunc"
});
const result5 = duration.toString({
  smallestUnit: "second",
  roundingMode: "trunc"
});
const result6 = duration.toString({
  fractionalSecondDigits: 0,
  roundingMode: "trunc"
});