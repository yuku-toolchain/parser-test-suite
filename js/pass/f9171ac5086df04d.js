const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 123, 987, 500);
const result1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: "trunc"
});
const result2 = datetime.toString({
  fractionalSecondDigits: 6,
  roundingMode: "trunc"
});
const result3 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: "trunc"
});
const result4 = datetime.toString({
  fractionalSecondDigits: 3,
  roundingMode: "trunc"
});
const result5 = datetime.toString({
  smallestUnit: "second",
  roundingMode: "trunc"
});
const result6 = datetime.toString({
  fractionalSecondDigits: 0,
  roundingMode: "trunc"
});
const result7 = datetime.toString({
  smallestUnit: "minute",
  roundingMode: "trunc"
});