const instance = Temporal.PlainYearMonth.from({
  year: 1989,
  month: 1,
  calendar: "japanese"
});
const result2 = instance.with({
  month: 2
});