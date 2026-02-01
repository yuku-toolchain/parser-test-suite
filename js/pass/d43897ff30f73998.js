for (const input of TemporalHelpers.ISO.plainYearMonthStringsValid()) {
  const plainYearMonth = Temporal.PlainYearMonth.from(input);
  TemporalHelpers.assertPlainYearMonth(plainYearMonth, 1976, 11, "M11");
}
for (const input of TemporalHelpers.ISO.plainYearMonthStringsValidNegativeYear()) {
  const plainYearMonth = Temporal.PlainYearMonth.from(input);
  TemporalHelpers.assertPlainYearMonth(plainYearMonth, -9999, 11, "M11");
}