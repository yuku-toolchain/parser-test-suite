const expected = ["get options.disambiguation", "get options.disambiguation.toString", "call options.disambiguation.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  disambiguation: "reject"
}, "options");
const instance = new Temporal.PlainDateTime(-271821, 4, 20, 0);