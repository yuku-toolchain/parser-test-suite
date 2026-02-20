const datetime = new Temporal.ZonedDateTime(0n, "UTC");
for (const calendar of ["2020-01-01", "2020-01-01[u-ca=iso8601]", "2020-01-01T00:00:00.000000000", "2020-01-01T00:00:00.000000000[u-ca=iso8601]", "01-01", "01-01[u-ca=iso8601]", "2020-01", "2020-01[u-ca=iso8601]"]) {
  const arg = {
    year: 1970,
    monthCode: "M01",
    day: 1,
    timeZone: "UTC",
    calendar
  };
  const result1 = Temporal.ZonedDateTime.compare(arg, datetime);
  const result2 = Temporal.ZonedDateTime.compare(datetime, arg);
}