const expected = ["get options.overflow", "get options.overflow.toString", "call options.overflow.toString"];
let actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "reject"
}, "options");
const result = Temporal.PlainMonthDay.from("05-17", options);
TemporalHelpers.assertPlainMonthDay(result, "M05", 17);
actual.splice(0);
actual.splice(0);