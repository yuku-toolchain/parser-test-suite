const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC");
const expected = ["get overflow.toString", "call overflow.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "constrain", "overflow");
const result = datetime.with({
  second: 41
}, {
  overflow: observer
});