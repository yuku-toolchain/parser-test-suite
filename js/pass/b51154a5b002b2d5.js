const result4 = Temporal.PlainYearMonth.from({
  year: 5782,
  monthCode: "M04",
  day: 20,
  calendar: "hebrew"
});
TemporalHelpers.assertPlainYearMonth(result4, 5782, 4, "M04", "reference day is the first of the calendar month even if day is given", "am", 5782, 5);
const isoYearMonth = result4.toString().slice(0, 7);
const result5 = Temporal.PlainYearMonth.from({
  year: 5783,
  monthCode: "M05L",
  calendar: "hebrew"
}, {
  overflow: "constrain"
});
TemporalHelpers.assertPlainYearMonth(result5, 5783, 6, "M06", "month code M05L does not exist in year 5783 (overflow constrain); Hebrew calendar constrains Adar I to Adar", "am", 5783, 22);
const result6 = Temporal.PlainYearMonth.from({
  year: 5783,
  month: 13,
  calendar: "hebrew"
}, {
  overflow: "constrain"
});
TemporalHelpers.assertPlainYearMonth(result6, 5783, 12, "M12", "month 13 does not exist in year 5783 (overflow constrain)", "am", 5783, 18);
const result7 = Temporal.PlainYearMonth.from({
  year: 5782,
  monthCode: "M04",
  day: 50,
  calendar: "hebrew"
}, {
  overflow: "constrain"
});
TemporalHelpers.assertPlainYearMonth(result7, 5782, 4, "M04", "reference day is set correctly even if day is out of range (overflow constrain)", "am", 5782, 5);
const result8 = Temporal.PlainYearMonth.from({
  year: 5782,
  monthCode: "M04",
  day: 50,
  calendar: "hebrew"
}, {
  overflow: "reject"
});
TemporalHelpers.assertPlainYearMonth(result8, 5782, 4, "M04", "reference day is set correctly even if day is out of range (overflow reject)", "am", 5782, 5);