const orig = new Temporal.PlainMonthDay(5, 2, undefined, 2000);
const result = Temporal.PlainMonthDay.from(orig);
TemporalHelpers.assertPlainMonthDay(result, "M05", 2, "PlainMonthDay is copied", 2000);