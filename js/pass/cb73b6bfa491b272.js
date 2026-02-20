const instance = new Temporal.PlainTime(1, 0, 0, 0, 0, 1);
const props = {};
props.minute = 30;
const result = instance.since(props);
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 30, 0, 0, 0, 1, "missing time units default to 0");