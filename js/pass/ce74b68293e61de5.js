TemporalHelpers.assertPlainDate(new Temporal.PlainDate(2020.6, 11.7, 24.1), 2020, 11, "M11", 24, "positive fractional");
TemporalHelpers.assertPlainDate(new Temporal.PlainDate(-2020.6, 11.7, 24.1), -2020, 11, "M11", 24, "negative fractional");
TemporalHelpers.assertPlainDate(new Temporal.PlainDate(null, 11, 24), 0, 11, "M11", 24, "null");
TemporalHelpers.assertPlainDate(new Temporal.PlainDate(true, 11, 24), 1, 11, "M11", 24, "boolean");
TemporalHelpers.assertPlainDate(new Temporal.PlainDate("2020.6", "11.7", "24.1"), 2020, 11, "M11", 24, "fractional strings");
for (const invalid of [Symbol(), 1n]) {}
for (const invalid of [undefined, "invalid"]) {}
const actual = [];
const args = [TemporalHelpers.toPrimitiveObserver(actual, 2020, "year"), TemporalHelpers.toPrimitiveObserver(actual, 11, "month"), TemporalHelpers.toPrimitiveObserver(actual, 24, "day")];
TemporalHelpers.assertPlainDate(new Temporal.PlainDate(...args), 2020, 11, "M11", 24, "invalid string");