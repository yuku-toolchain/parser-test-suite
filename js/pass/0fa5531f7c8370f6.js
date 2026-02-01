const props = {};
props.minute = 30;
const result = Temporal.PlainTime.from(props);
TemporalHelpers.assertPlainTime(result, 0, 30, 0, 0, 0, 0, "missing time units default to 0");