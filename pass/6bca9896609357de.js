const instance = new Temporal.PlainYearMonth(1976, 11);
for (const arg of TemporalHelpers.ISO.plainYearMonthStringsValid()) {
  const result = instance.equals(arg);
}
const instanceNegativeYear = new Temporal.PlainYearMonth(-9999, 11);
for (const arg of TemporalHelpers.ISO.plainYearMonthStringsValidNegativeYear()) {
  const result = instanceNegativeYear.equals(arg);
}