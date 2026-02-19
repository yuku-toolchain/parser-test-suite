const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const result1 = instant.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfExpand"
});
const result2 = instant.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfExpand"
});
const result3 = instant.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfExpand"
});
const result4 = instant.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfExpand"
});
const result5 = instant.toString({
  smallestUnit: "second",
  roundingMode: "halfExpand"
});
const result6 = instant.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfExpand"
});
const result7 = instant.toString({
  smallestUnit: "minute",
  roundingMode: "halfExpand"
});