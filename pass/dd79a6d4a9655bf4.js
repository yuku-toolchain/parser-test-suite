const instant = new Temporal.Instant(1_000_000_000_987_650_000n);
const expected = ["get fractionalSecondDigits.toString", "call fractionalSecondDigits.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "auto", "fractionalSecondDigits");
const result = instant.toString({
  fractionalSecondDigits: observer
});