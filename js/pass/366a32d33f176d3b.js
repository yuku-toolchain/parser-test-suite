const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 123, 987, 500);
const explicit1 = datetime.toString({
  smallestUnit: undefined,
  fractionalSecondDigits: 6
});
const implicit1 = datetime.toString({
  fractionalSecondDigits: 6
});
const explicit2 = datetime.toString({
  smallestUnit: undefined,
  fractionalSecondDigits: 3
});
const implicit2 = datetime.toString({
  fractionalSecondDigits: 3
});