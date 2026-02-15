const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const result1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfEven"
});
const result2 = datetime.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfEven"
});
const result3 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfEven"
});
const result4 = datetime.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfEven"
});
const result5 = datetime.toString({
  smallestUnit: "second",
  roundingMode: "halfEven"
});
const result6 = datetime.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfEven"
});
const result7 = datetime.toString({
  smallestUnit: "minute",
  roundingMode: "halfEven"
});