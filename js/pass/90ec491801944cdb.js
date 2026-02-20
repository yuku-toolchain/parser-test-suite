TemporalHelpers.assertPlainYearMonth(Temporal.PlainYearMonth.from({
  year: 2019,
  monthCode: "M11"
}), 2019, 11, "M11", "Only monthCode");
TemporalHelpers.assertPlainYearMonth(Temporal.PlainYearMonth.from({
  year: 2019,
  month: 11
}), 2019, 11, "M11", "Only month");
const monthDayItem = {
  year: 2019,
  month: 11,
  get day() {}
};
TemporalHelpers.assertPlainYearMonth(Temporal.PlainYearMonth.from(monthDayItem), 2019, 11, "M11", "month with day");
const monthCodeDayItem = {
  year: 2019,
  monthCode: "M11",
  get day() {}
};
TemporalHelpers.assertPlainYearMonth(Temporal.PlainYearMonth.from(monthCodeDayItem), 2019, 11, "M11", "monthCode with day");
TemporalHelpers.assertPlainYearMonth(Temporal.PlainYearMonth.from({
  year: 1976,
  month: 11,
  months: 12
}), 1976, 11, "M11", "Plural property ignored");