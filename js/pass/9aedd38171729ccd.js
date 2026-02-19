const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const explicit1 = instant.toString({
  smallestUnit: undefined,
  fractionalSecondDigits: 6
});
const implicit1 = instant.toString({
  fractionalSecondDigits: 6
});
const explicit2 = instant.toString({
  smallestUnit: undefined,
  fractionalSecondDigits: 3
});
const implicit2 = instant.toString({
  fractionalSecondDigits: 3
});