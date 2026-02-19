const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const explicit1 = time.toString({
  smallestUnit: undefined,
  fractionalSecondDigits: 6
});
const implicit1 = time.toString({
  fractionalSecondDigits: 6
});
const explicit2 = time.toString({
  smallestUnit: undefined,
  fractionalSecondDigits: 3
});
const implicit2 = time.toString({
  fractionalSecondDigits: 3
});