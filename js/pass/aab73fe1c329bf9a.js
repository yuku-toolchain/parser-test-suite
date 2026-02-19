const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "constrain"
}, "options");
const instance = new Temporal.PlainYearMonth(-271821, 4);
actual.splice(0);
const instance2 = new Temporal.PlainYearMonth(1999, 12);