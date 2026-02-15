const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_650_000n, "UTC");
let string = datetime.toString({
  fractionalSecondDigits: 2.5
});
string = datetime.toString({
  fractionalSecondDigits: 9.7
});