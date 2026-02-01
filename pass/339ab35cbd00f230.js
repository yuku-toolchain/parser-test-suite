const instant = new Temporal.Instant(1_000_000_000_987_650_000n);
let string = instant.toString({
  fractionalSecondDigits: 2.5
});
string = instant.toString({
  fractionalSecondDigits: 9.7
});