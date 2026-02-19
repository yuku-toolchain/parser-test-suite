const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
let actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "reject"
}, "options");
const result = Temporal.PlainDate.from("2021-05-17", options);
TemporalHelpers.assertPlainDate(result, 2021, 5, "M05", 17);
actual.splice(0);
actual.splice(0);