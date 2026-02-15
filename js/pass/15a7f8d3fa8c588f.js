Number.isFinite = () => {};
Math.sign = () => {};
const duration = new Temporal.Duration(1, 1);
TemporalHelpers.assertDuration(duration, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0);