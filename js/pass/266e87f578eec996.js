const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const result1 = instant.toString({
  smallestUnit: "microsecond",
  roundingMode: "ceil"
});
const result2 = instant.toString({
  fractionalSecondDigits: 6,
  roundingMode: "ceil"
});
const result3 = instant.toString({
  smallestUnit: "millisecond",
  roundingMode: "ceil"
});
const result4 = instant.toString({
  fractionalSecondDigits: 3,
  roundingMode: "ceil"
});
const result5 = instant.toString({
  smallestUnit: "second",
  roundingMode: "ceil"
});
const result6 = instant.toString({
  fractionalSecondDigits: 0,
  roundingMode: "ceil"
});
const result7 = instant.toString({
  smallestUnit: "minute",
  roundingMode: "ceil"
});