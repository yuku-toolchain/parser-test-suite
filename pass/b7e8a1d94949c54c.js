const min = Temporal.PlainYearMonth.from("-271821-04");
TemporalHelpers.assertPlainDate(min.toPlainDate({
  day: 19
}), -271821, 4, "M04", 19, "min");
const max = Temporal.PlainYearMonth.from("+275760-09");
TemporalHelpers.assertPlainDate(max.toPlainDate({
  day: 13
}), 275760, 9, "M09", 13, "max");