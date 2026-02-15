TemporalHelpers.assertPlainMonthDay(new Temporal.PlainMonthDay(11.7, 24.1), "M11", 24, "positive fractional");
TemporalHelpers.assertPlainMonthDay(new Temporal.PlainMonthDay("11.7", "24.1"), "M11", 24, "fractional strings");
for (const invalid of [Symbol(), 1n]) {}
for (const invalid of [undefined, "invalid"]) {}