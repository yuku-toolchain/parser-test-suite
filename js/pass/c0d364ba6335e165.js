const instance = new Temporal.PlainDateTime(2024, 8, 8, 12, 34, 56, 987, 654, 321, "hebrew");
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