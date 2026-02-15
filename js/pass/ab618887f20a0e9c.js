class CustomDuration extends Temporal.Duration {}
const instance = new CustomDuration(1, 1, 0, 1);
TemporalHelpers.assertDuration(instance, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0);