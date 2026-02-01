const expected = ["get options.relativeTo"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  relativeTo: undefined
}, "options");
const d1 = new Temporal.Duration(0, 0, 0, 1);
const d2 = new Temporal.Duration(1);