const orig = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 987, 654, 321);
const result = Temporal.Duration.from(orig);
TemporalHelpers.assertDuration(result, 1, 2, 3, 4, 5, 6, 7, 987, 654, 321, "Duration is copied");