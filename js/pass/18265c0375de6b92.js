const yearmonth = new Temporal.PlainYearMonth(2000, 5);
const duration = new Temporal.Duration(1, 1);
const expected = ["get overflow.toString", "call overflow.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "constrain", "overflow");
const result = yearmonth.subtract(duration, {
  overflow: observer
});
TemporalHelpers.assertPlainYearMonth(result, 1999, 4, "M04", "object with toString");