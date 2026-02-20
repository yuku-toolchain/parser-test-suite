for (const calendar of ["2020-01-01", "2020-01-01[u-ca=iso8601]", "2020-01-01T00:00:00.000000000", "2020-01-01T00:00:00.000000000[u-ca=iso8601]", "01-01", "01-01[u-ca=iso8601]", "2020-01", "2020-01[u-ca=iso8601]"]) {
  const arg = {
    year: 2019,
    monthCode: "M06",
    calendar
  };
  const result1 = Temporal.PlainYearMonth.compare(arg, new Temporal.PlainYearMonth(2019, 6));
  const result2 = Temporal.PlainYearMonth.compare(new Temporal.PlainYearMonth(2019, 6), arg);
}