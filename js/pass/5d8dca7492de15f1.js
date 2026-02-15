const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const result1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfTrunc"
});
const result2 = datetime.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfTrunc"
});
const result3 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfTrunc"
});
const result4 = datetime.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfTrunc"
});
const result5 = datetime.toString({
  smallestUnit: "second",
  roundingMode: "halfTrunc"
});
const result6 = datetime.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfTrunc"
});
const result7 = datetime.toString({
  smallestUnit: "minute",
  roundingMode: "halfTrunc"
});