const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 650, 0);
const expected = ["get fractionalSecondDigits.toString", "call fractionalSecondDigits.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "auto", "fractionalSecondDigits");
const result = datetime.toString({
  fractionalSecondDigits: observer
});