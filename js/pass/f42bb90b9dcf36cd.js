const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "reject"
}, "options");
const instance = new Temporal.PlainDate(2025, 8, 31);