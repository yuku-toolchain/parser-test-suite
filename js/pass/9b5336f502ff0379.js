const duration = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 987, 650, 0);
const expected = ["get fractionalSecondDigits.toString", "call fractionalSecondDigits.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "auto", "fractionalSecondDigits");
const result = duration.toString({
  fractionalSecondDigits: observer
});