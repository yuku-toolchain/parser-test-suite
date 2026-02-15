const orig = new Temporal.PlainDate(2000, 5, 2);
const result = Temporal.PlainDate.from(orig);
TemporalHelpers.assertPlainDate(result, 2000, 5, "M05", 2, "PlainDate is copied");