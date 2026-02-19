const instance = new Temporal.PlainDateTime(2000, 1, 1, 12, 30, 45, 123, 456, 789);
const props = {};
props.minute = 30;
const result = instance.withPlainTime(props);
TemporalHelpers.assertPlainDateTime(result, 2000, 1, "M01", 1, 0, 30, 0, 0, 0, 0, "missing time units default to 0");