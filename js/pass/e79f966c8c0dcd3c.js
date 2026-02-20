const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const result1 = instant.toString({
  smallestUnit: "microsecond",
  roundingMode: "trunc"
});
const result2 = instant.toString({
  fractionalSecondDigits: 6,
  roundingMode: "trunc"
});
const result3 = instant.toString({
  smallestUnit: "millisecond",
  roundingMode: "trunc"
});
const result4 = instant.toString({
  fractionalSecondDigits: 3,
  roundingMode: "trunc"
});
const result5 = instant.toString({
  smallestUnit: "second",
  roundingMode: "trunc"
});
const result6 = instant.toString({
  fractionalSecondDigits: 0,
  roundingMode: "trunc"
});
const result7 = instant.toString({
  smallestUnit: "minute",
  roundingMode: "trunc"
});