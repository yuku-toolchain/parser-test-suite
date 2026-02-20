const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "reject"
}, "options");
const instance = new Temporal.ZonedDateTime(7689600_000_000_000n, "UTC");
actual.splice(0);