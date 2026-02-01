const validValues = [new Temporal.PlainDateTime(2000, 5, 2, 12), "2000-05-02T12:00"];
validValues.forEach(value => TemporalHelpers.checkStringOptionWrongType("overflow", "constrain", overflow => Temporal.PlainDateTime.from(value, {
  overflow
}), (result, descr) => TemporalHelpers.assertPlainDateTime(result, 2000, 5, "M05", 2, 12, 0, 0, 0, 0, 0, descr)));
const propertyBag = {
  year: 2000,
  month: 5,
  day: 2,
  hour: 12
};
const expected = ["get overflow.toString", "call overflow.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "constrain", "overflow");
const result = Temporal.PlainDateTime.from(propertyBag, {
  overflow: observer
});
TemporalHelpers.assertPlainDateTime(result, 2000, 5, "M05", 2, 12, 0, 0, 0, 0, 0, "object with toString");