var pmd = Temporal.PlainMonthDay.from({
  calendar: "chinese",
  year: 2004,
  monthCode: "M04",
  month: 5,
  day: 1
});
var pd = Temporal.PlainDate.from(pmd.toString());