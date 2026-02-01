for (const argument of TemporalHelpers.ISO.plainMonthDayStringsValid()) {
  const plainMonthDay = Temporal.PlainMonthDay.from(argument);
  TemporalHelpers.assertPlainMonthDay(plainMonthDay, "M10", 1, `from ${argument}`);
}
for (const arg of TemporalHelpers.ISO.plainMonthDayStringsInvalid()) {}