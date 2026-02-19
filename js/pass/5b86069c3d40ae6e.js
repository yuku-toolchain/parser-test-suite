const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const result1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: "expand"
});
const result2 = datetime.toString({
  fractionalSecondDigits: 6,
  roundingMode: "expand"
});
const result3 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: "expand"
});
const result4 = datetime.toString({
  fractionalSecondDigits: 3,
  roundingMode: "expand"
});
const result5 = datetime.toString({
  smallestUnit: "second",
  roundingMode: "expand"
});
const result6 = datetime.toString({
  fractionalSecondDigits: 0,
  roundingMode: "expand"
});
const result7 = datetime.toString({
  smallestUnit: "minute",
  roundingMode: "expand"
});