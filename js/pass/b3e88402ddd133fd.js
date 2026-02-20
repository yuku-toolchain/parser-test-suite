const instance = Temporal.PlainYearMonth.from({
  calendar: "hebrew",
  year: 5784,
  monthCode: "M11"
});
const resultYear = instance.with({
  year: 5783
});
const resultMonth = instance.with({
  month: 13
});
const resultMonthCode = instance.with({
  monthCode: "M10"
});