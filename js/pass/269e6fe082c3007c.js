const duration = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 123, 987, 500);
const result1 = duration.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfExpand"
});
const result2 = duration.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfExpand"
});
const result3 = duration.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfExpand"
});
const result4 = duration.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfExpand"
});
const result5 = duration.toString({
  smallestUnit: "second",
  roundingMode: "halfExpand"
});
const result6 = duration.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfExpand"
});