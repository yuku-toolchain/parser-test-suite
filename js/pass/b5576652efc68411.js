const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const result1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: "floor"
});
const result2 = time.toString({
  fractionalSecondDigits: 6,
  roundingMode: "floor"
});
const result3 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: "floor"
});
const result4 = time.toString({
  fractionalSecondDigits: 3,
  roundingMode: "floor"
});
const result5 = time.toString({
  smallestUnit: "second",
  roundingMode: "floor"
});
const result6 = time.toString({
  fractionalSecondDigits: 0,
  roundingMode: "floor"
});
const result7 = time.toString({
  smallestUnit: "minute",
  roundingMode: "floor"
});