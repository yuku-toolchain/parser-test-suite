const date = new Temporal.PlainDate(1976, 11, 18);
TemporalHelpers.assertPlainDate(date.with({
  month: 13
}), 1976, 12, "M12", 18, "too-high month is constrained to highest value");
TemporalHelpers.assertPlainDate(date.with({
  day: 31
}), 1976, 11, "M11", 30, "too-high day is constrained to highest value");