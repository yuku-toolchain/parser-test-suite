class CustomPlainYearMonth extends Temporal.PlainYearMonth {}
const instance = new CustomPlainYearMonth(2000, 5);
TemporalHelpers.assertPlainYearMonth(instance, 2000, 5, "M05");