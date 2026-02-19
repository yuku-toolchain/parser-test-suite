const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const result1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfExpand"
});
const result2 = datetime.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfExpand"
});
const result3 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfExpand"
});
const result4 = datetime.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfExpand"
});
const result5 = datetime.toString({
  smallestUnit: "second",
  roundingMode: "halfExpand"
});
const result6 = datetime.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfExpand"
});
const result7 = datetime.toString({
  smallestUnit: "minute",
  roundingMode: "halfExpand"
});