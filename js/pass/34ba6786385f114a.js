class CustomPlainDateTime extends Temporal.PlainDateTime {}
const instance = new CustomPlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
TemporalHelpers.assertPlainDateTime(instance, 2000, 5, "M05", 2, 12, 34, 56, 987, 654, 321);