const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
let actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "reject"
}, "options");
const result = Temporal.PlainDateTime.from("2021-05-17T12:34:56", options);
TemporalHelpers.assertPlainDateTime(result, 2021, 5, "M05", 17, 12, 34, 56, 0, 0, 0);
actual.splice(0);
actual.splice(0);