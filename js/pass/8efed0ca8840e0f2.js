["use", "ignore", "prefer", "reject"].forEach(offset => {
  const result = Temporal.ZonedDateTime.from("1970-01-01T12:00-00:44:30[Africa/Monrovia]", {
    offset
  });
});
["use", "ignore", "prefer", "reject"].forEach(offset => {
  const result = Temporal.ZonedDateTime.from("1970-01-01T12:00-00:44:30.000000000[Africa/Monrovia]", {
    offset
  });
});
const str = "1970-01-01T12:00-00:45[Africa/Monrovia]";
["ignore", "prefer", "reject"].forEach(offset => {
  const result = Temporal.ZonedDateTime.from(str, {
    offset
  });
  TemporalHelpers.assertPlainDateTime(result.toPlainDateTime(), 1970, 1, "M01", 1, 12, 0, 0, 0, 0, 0, "wall time is preserved");
});
const result = Temporal.ZonedDateTime.from(str, {
  offset: "use"
});
TemporalHelpers.assertPlainDateTime(result.toPlainDateTime(), 1970, 1, "M01", 1, 12, 0, 30, 0, 0, 0, "wall time is shifted by the difference between exact and rounded offset");
const wrongSeconds = "1970-01-01T12-00:44:40[Africa/Monrovia]";
const roundedSeconds = "1970-01-01T12-00:45:00[Africa/Monrovia]";
const useResultWrongSeconds = Temporal.ZonedDateTime.from(wrongSeconds, {
  offset: "use"
});
TemporalHelpers.assertPlainDateTime(useResultWrongSeconds.toPlainDateTime(), 1970, 1, "M01", 1, 12, 0, 10, 0, 0, 0, "wall time is shifted by the difference between exact and given offset");
const useResultRoundedSeconds = Temporal.ZonedDateTime.from(roundedSeconds, {
  offset: "use"
});
TemporalHelpers.assertPlainDateTime(useResultRoundedSeconds.toPlainDateTime(), 1970, 1, "M01", 1, 12, 0, 30, 0, 0, 0, "wall time is shifted by the difference between exact and given offset");
["ignore", "prefer"].forEach(offset => {
  const resultWrongSeconds = Temporal.ZonedDateTime.from(wrongSeconds, {
    offset
  });
  TemporalHelpers.assertPlainDateTime(resultWrongSeconds.toPlainDateTime(), 1970, 1, "M01", 1, 12, 0, 0, 0, 0, 0, "wall time is preserved");
  const resultRoundedSeconds = Temporal.ZonedDateTime.from(roundedSeconds, {
    offset
  });
  TemporalHelpers.assertPlainDateTime(resultRoundedSeconds.toPlainDateTime(), 1970, 1, "M01", 1, 12, 0, 0, 0, 0, 0, "wall time is preserved");
});
const properties = {
  year: 1970,
  month: 1,
  day: 1,
  hour: 12,
  offset: "-00:45",
  timeZone: "Africa/Monrovia"
};
["ignore", "prefer"].forEach(offset => {
  const result = Temporal.ZonedDateTime.from(properties, {
    offset
  });
});
const result2 = Temporal.ZonedDateTime.from(properties, {
  offset: "use"
});
const reference = -543069621_000_000_000n;