const d = Temporal.Duration.from({
  years: 5,
  days: 1
});
const d2 = d.with({
  years: -1,
  days: 0,
  minutes: -1
});
TemporalHelpers.assertDuration(d2, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0);