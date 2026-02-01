const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const result1 = instant.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfFloor"
});
const result2 = instant.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfFloor"
});
const result3 = instant.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfFloor"
});
const result4 = instant.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfFloor"
});
const result5 = instant.toString({
  smallestUnit: "second",
  roundingMode: "halfFloor"
});
const result6 = instant.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfFloor"
});
const result7 = instant.toString({
  smallestUnit: "minute",
  roundingMode: "halfFloor"
});