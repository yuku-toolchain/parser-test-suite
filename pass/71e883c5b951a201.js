const expected = ["get options.disambiguation", "get options.disambiguation.toString", "call options.disambiguation.toString"];
const actual = [];
const instance = new Temporal.PlainDateTime(2000, 4, 2, 2, 30);
const options = TemporalHelpers.propertyBagObserver(actual, {
  disambiguation: "reject"
}, "options");
actual.splice(0);