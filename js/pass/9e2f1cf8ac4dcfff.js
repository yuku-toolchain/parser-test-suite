const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "halfEven"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "halfEven"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "halfEven"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "halfEven"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "halfEven"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "halfEven"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "halfEven"
});