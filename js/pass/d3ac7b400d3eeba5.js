const instance = Temporal.PlainMonthDay.from({
  calendar: "hebrew",
  monthCode: "M11",
  day: 4
});
const resultMonthCode = instance.with({
  monthCode: "M10"
});
const resultDay = instance.with({
  day: 24
});