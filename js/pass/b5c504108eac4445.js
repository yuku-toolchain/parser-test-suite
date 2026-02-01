const orig = new Temporal.PlainTime(11, 42, 0, 0, 0, 0);
const result = Temporal.PlainTime.from(orig);
TemporalHelpers.assertPlainTime(result, 11, 42, 0, 0, 0, 0, "PlainTime is copied");