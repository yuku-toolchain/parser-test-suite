const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_650_000n, "UTC");
const expected = ["get fractionalSecondDigits.toString", "call fractionalSecondDigits.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "auto", "fractionalSecondDigits");
const result = datetime.toString({
  fractionalSecondDigits: observer
});