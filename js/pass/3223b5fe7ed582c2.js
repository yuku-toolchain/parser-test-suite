const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfExpand"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfExpand"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfExpand"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfExpand"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "halfExpand"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfExpand"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "halfExpand"
});