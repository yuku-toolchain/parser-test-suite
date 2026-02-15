const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "constrain"
}, "options");
const instance = new Temporal.PlainDateTime(2025, 8, 31, 1);