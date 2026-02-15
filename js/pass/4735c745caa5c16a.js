const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const result1 = instant.toString({
  smallestUnit: "microsecond",
  roundingMode: "floor"
});
const result2 = instant.toString({
  fractionalSecondDigits: 6,
  roundingMode: "floor"
});
const result3 = instant.toString({
  smallestUnit: "millisecond",
  roundingMode: "floor"
});
const result4 = instant.toString({
  fractionalSecondDigits: 3,
  roundingMode: "floor"
});
const result5 = instant.toString({
  smallestUnit: "second",
  roundingMode: "floor"
});
const result6 = instant.toString({
  fractionalSecondDigits: 0,
  roundingMode: "floor"
});
const result7 = instant.toString({
  smallestUnit: "minute",
  roundingMode: "floor"
});