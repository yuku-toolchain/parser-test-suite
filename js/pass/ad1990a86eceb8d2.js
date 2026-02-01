TemporalHelpers.checkToTemporalPlainDateTimeFastPath(date => {
  const datetime = new Temporal.PlainDateTime(2000, 5, 2, 0, 0, 0, 987, 654, 321, "iso8601");
  const result = datetime.until(date);
});