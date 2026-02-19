const ym = Temporal.PlainYearMonth.from("2002-01");
TemporalHelpers.assertPlainDate(ym.toPlainDate({
  day: 22
}), 2002, 1, "M01", 22);