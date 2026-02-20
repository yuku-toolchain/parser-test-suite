const plainDate = new Temporal.PlainDate(2020, 12, 24, "iso8601");
TemporalHelpers.assertPlainDate(plainDate, 2020, 12, "M12", 24, "with string");