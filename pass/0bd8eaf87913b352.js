const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", "hebrew");
const resultYear = instance.with({
  year: 5762
});
const resultMonth = instance.with({
  month: 11
});
const resultMonthCode = instance.with({
  monthCode: "M11"
});
const resultDay = instance.with({
  day: 24
});