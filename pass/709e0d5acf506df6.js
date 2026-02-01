const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
let actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "reject"
}, "options");
const result = Temporal.PlainYearMonth.from("2021-05", options);
TemporalHelpers.assertPlainYearMonth(result, 2021, 5, "M05");
actual.splice(0);
actual.splice(0);