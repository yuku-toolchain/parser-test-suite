const validValues = [new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC"), "2001-09-09T01:46:40.987654321+00:00[UTC]"];
validValues.forEach(value => TemporalHelpers.checkStringOptionWrongType("overflow", "constrain", overflow => Temporal.ZonedDateTime.from(value, {
  overflow
}), (result, descr) => assert.sameValue(result.epochNanoseconds, 1_000_000_000_987_654_321n, descr)));
const propertyBag = {
  year: 2001,
  month: 9,
  day: 9,
  hour: 1,
  minute: 46,
  second: 40,
  timeZone: "UTC"
};
const expected = ["get overflow.toString", "call overflow.toString"];
const actual = [];
const observer = TemporalHelpers.toPrimitiveObserver(actual, "constrain", "overflow");
const result = Temporal.ZonedDateTime.from(propertyBag, {
  overflow: observer
});