class CustomPlainDate extends Temporal.PlainDate {}
const instance = new CustomPlainDate(2000, 5, 2);
TemporalHelpers.assertPlainDate(instance, 2000, 5, "M05", 2);