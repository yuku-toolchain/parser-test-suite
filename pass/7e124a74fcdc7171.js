const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
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