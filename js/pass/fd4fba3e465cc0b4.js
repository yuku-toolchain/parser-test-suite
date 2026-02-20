const d1 = Temporal.Duration.from({
  milliseconds: 1000,
  month: 1
});
TemporalHelpers.assertDuration(d1, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
const d2 = Temporal.Duration.from(d1);
TemporalHelpers.assertDuration(d1, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);
TemporalHelpers.assertDuration(d2, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0);