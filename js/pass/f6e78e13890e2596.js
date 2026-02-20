const expected = ["get options.disambiguation", "get options.disambiguation.toString", "call options.disambiguation.toString", "get options.offset", "get options.offset.toString", "call options.offset.toString", "get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "constrain",
  offset: "prefer",
  disambiguation: "compatible"
}, "options");
const instance = new Temporal.ZonedDateTime(0n, "UTC");