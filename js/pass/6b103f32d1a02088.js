const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const result1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: "ceil"
});
const result2 = datetime.toString({
  fractionalSecondDigits: 6,
  roundingMode: "ceil"
});
const result3 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: "ceil"
});
const result4 = datetime.toString({
  fractionalSecondDigits: 3,
  roundingMode: "ceil"
});
const result5 = datetime.toString({
  smallestUnit: "second",
  roundingMode: "ceil"
});
const result6 = datetime.toString({
  fractionalSecondDigits: 0,
  roundingMode: "ceil"
});
const result7 = datetime.toString({
  smallestUnit: "minute",
  roundingMode: "ceil"
});