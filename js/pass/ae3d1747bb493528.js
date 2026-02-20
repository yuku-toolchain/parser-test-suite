const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const result1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: "floor"
});
const result2 = datetime.toString({
  fractionalSecondDigits: 6,
  roundingMode: "floor"
});
const result3 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: "floor"
});
const result4 = datetime.toString({
  fractionalSecondDigits: 3,
  roundingMode: "floor"
});
const result5 = datetime.toString({
  smallestUnit: "second",
  roundingMode: "floor"
});
const result6 = datetime.toString({
  fractionalSecondDigits: 0,
  roundingMode: "floor"
});
const result7 = datetime.toString({
  smallestUnit: "minute",
  roundingMode: "floor"
});