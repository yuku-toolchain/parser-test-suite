const duration = Temporal.Duration.from({
  days: 3,
  hours: 1,
  minutes: 10
});
const result = duration.subtract('P1DT5M');
TemporalHelpers.assertDuration(result, 0, 0, 0, 2, 1, 5, 0, 0, 0, 0, "String argument should be supported");