const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "constrain"
}, "options");
const instance = new Temporal.PlainDate(2025, 7, 31);