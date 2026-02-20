const expected = ["get options.calendarName", "get options.calendarName.toString", "call options.calendarName.toString"];
const actual = [];
const instance = new Temporal.PlainYearMonth(2000, 5);
const options = TemporalHelpers.propertyBagObserver(actual, {
  calendarName: "auto"
}, "options");
instance.toString(options);