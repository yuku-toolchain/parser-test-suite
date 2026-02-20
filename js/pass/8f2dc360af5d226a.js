const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const result1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfCeil"
});
const result2 = datetime.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfCeil"
});
const result3 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfCeil"
});
const result4 = datetime.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfCeil"
});
const result5 = datetime.toString({
  smallestUnit: "second",
  roundingMode: "halfCeil"
});
const result6 = datetime.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfCeil"
});
const result7 = datetime.toString({
  smallestUnit: "minute",
  roundingMode: "halfCeil"
});