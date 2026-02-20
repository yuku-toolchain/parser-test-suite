const plainDate = Temporal.PlainDate.from("1976-11-18");
const plainYearMonth = Temporal.PlainYearMonth.from(plainDate);
TemporalHelpers.assertPlainYearMonth(plainYearMonth, 1976, 11, "M11");