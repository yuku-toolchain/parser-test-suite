const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12);
const expected = ["get overflow.toString", "call overflow.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "constrain", "overflow");
const result = datetime.with({
  minute: 45
}, {
  overflow: observer
});
TemporalHelpers.assertPlainDateTime(result, 2000, 5, "M05", 2, 12, 45, 0, 0, 0, 0, "object with toString");