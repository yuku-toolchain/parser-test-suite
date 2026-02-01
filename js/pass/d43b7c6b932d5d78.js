const expected = ["get options.relativeTo", "get options.unit", "get options.unit.toString", "call options.unit.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  unit: "weeks",
  relativeTo: undefined
}, "options");
const instance = new Temporal.Duration(1);