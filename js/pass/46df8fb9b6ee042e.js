const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const result1 = instant.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfCeil"
});
const result2 = instant.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfCeil"
});
const result3 = instant.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfCeil"
});
const result4 = instant.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfCeil"
});
const result5 = instant.toString({
  smallestUnit: "second",
  roundingMode: "halfCeil"
});
const result6 = instant.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfCeil"
});
const result7 = instant.toString({
  smallestUnit: "minute",
  roundingMode: "halfCeil"
});