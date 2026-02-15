class CustomPlainTime extends Temporal.PlainTime {}
const instance = new CustomPlainTime(12, 34, 56, 987, 654, 321);
TemporalHelpers.assertPlainTime(instance, 12, 34, 56, 987, 654, 321);