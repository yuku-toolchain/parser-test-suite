TemporalHelpers.assertPlainYearMonth(new Temporal.PlainYearMonth(2020.6, 11.7), 2020, 11, "M11", "positive fractional");
TemporalHelpers.assertPlainYearMonth(new Temporal.PlainYearMonth(-2020.6, 11.7), -2020, 11, "M11", "negative fractional");
TemporalHelpers.assertPlainYearMonth(new Temporal.PlainYearMonth(null, 11), 0, 11, "M11", "null defaults to zero");
TemporalHelpers.assertPlainYearMonth(new Temporal.PlainYearMonth(false, true), 0, 1, "M01", "boolean defaults");
TemporalHelpers.assertPlainYearMonth(new Temporal.PlainYearMonth("2020.6", "11.7"), 2020, 11, "M11", "fractional strings");
for (const invalid of [Symbol(), 1n]) {}
for (const invalid of [undefined, "invalid"]) {}