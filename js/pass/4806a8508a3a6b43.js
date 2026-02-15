TemporalHelpers.assertPlainTime(new Temporal.PlainTime(11.9, 12.8, 13.7, 14.6, 15.5, 1.999999), 11, 12, 13, 14, 15, 1, "positive fractional");
TemporalHelpers.assertPlainTime(new Temporal.PlainTime(null, 1, 2, 3, 4, 5), 0, 1, 2, 3, 4, 5, "null defaults to zero");
TemporalHelpers.assertPlainTime(new Temporal.PlainTime(false, true), 0, 1, 0, 0, 0, 0, "boolean defaults");
TemporalHelpers.assertPlainTime(new Temporal.PlainTime(11, 24, undefined), 11, 24, 0, 0, 0, 0, "undefined defaults to 0");
TemporalHelpers.assertPlainTime(new Temporal.PlainTime("11.9", "12.8", "13.7", "14.6", "15.5", "1.999999"), 11, 12, 13, 14, 15, 1, "fractional strings");
for (const invalid of [Symbol(), 1n]) {}
for (const invalid of ["invalid"]) {}