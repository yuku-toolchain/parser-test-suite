const bad = {
  year: 2019,
  month: 1,
  day: 32,
  timeZone: "+01:00"
};
const expected = new Temporal.ZonedDateTime(1548889200000000000n, "+01:00");
TemporalHelpers.assertZonedDateTimesEqual(Temporal.ZonedDateTime.from(bad), expected);
TemporalHelpers.assertZonedDateTimesEqual(Temporal.ZonedDateTime.from(bad, {
  overflow: "constrain"
}), expected);