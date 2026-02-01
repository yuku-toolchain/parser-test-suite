const instance = Temporal.ZonedDateTime.from({
  year: 1970,
  month: 1,
  day: 1,
  hour: 12,
  timeZone: "Africa/Monrovia"
});
const properties = {
  day: 2,
  offset: "-00:45"
};
["ignore", "prefer"].forEach(offset => {
  const result = instance.with(properties, {
    offset
  });
  TemporalHelpers.assertPlainDateTime(result.toPlainDateTime(), 1970, 1, "M01", 2, 12, 0, 0, 0, 0, 0, "wall time is not shifted");
});
const result = instance.with(properties, {
  offset: "use"
});
TemporalHelpers.assertPlainDateTime(result.toPlainDateTime(), 1970, 1, "M01", 2, 12, 0, 30, 0, 0, 0, "wall time is shifted by the difference between exact and rounded offset");