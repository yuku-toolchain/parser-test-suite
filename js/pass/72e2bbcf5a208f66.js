const instance = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
const units = ["year", "month", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"];
units.forEach(unit => {
  let plural = `${unit}s`;
  let options = {};
  options[plural] = 1;
});
TemporalHelpers.assertPlainDateTime(instance.with({
  year: 1965,
  nonsense: true
}), 1965, 5, "M05", 2, 12, 34, 56, 987, 654, 321, "unrecognized properties ignored & does not throw if recognized properties present)");