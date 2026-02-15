const instance = new Temporal.PlainDate(2024, 8, 8, "hebrew");
const resultYear = instance.with({
  year: 5783
});
const resultMonth = instance.with({
  month: 13
});
const resultMonthCode = instance.with({
  monthCode: "M10"
});
const resultDay = instance.with({
  day: 24
});