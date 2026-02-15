const orig = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 20, 123, 456, 789);
const result = Temporal.PlainDateTime.from(orig);
TemporalHelpers.assertPlainDateTime(result, 1976, 11, "M11", 18, 15, 23, 20, 123, 456, 789, "PlainDateTime is copied");