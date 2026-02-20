const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const result1 = instant.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfEven"
});
const result2 = instant.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfEven"
});
const result3 = instant.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfEven"
});
const result4 = instant.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfEven"
});
const result5 = instant.toString({
  smallestUnit: "second",
  roundingMode: "halfEven"
});
const result6 = instant.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfEven"
});
const result7 = instant.toString({
  smallestUnit: "minute",
  roundingMode: "halfEven"
});