const duration = new Temporal.Duration(0, 0, 0, 0, 12, 34, 56, 123, 987, 500);
const explicit1 = duration.toString({
  smallestUnit: undefined,
  fractionalSecondDigits: 6
});
const implicit1 = duration.toString({
  fractionalSecondDigits: 6
});
const explicit2 = duration.toString({
  smallestUnit: undefined,
  fractionalSecondDigits: 3
});
const implicit2 = duration.toString({
  fractionalSecondDigits: 3
});