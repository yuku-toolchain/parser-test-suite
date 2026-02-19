class CustomPlainMonthDay extends Temporal.PlainMonthDay {}
const instance = new CustomPlainMonthDay(5, 2);
TemporalHelpers.assertPlainMonthDay(instance, "M05", 2);