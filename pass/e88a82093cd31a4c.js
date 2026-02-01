const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
TemporalHelpers.checkToTemporalPlainDateTimeFastPath(date => {
  const result = Temporal.PlainDateTime.compare(date, datetime);
});
TemporalHelpers.checkToTemporalPlainDateTimeFastPath(date => {
  const result = Temporal.PlainDateTime.compare(datetime, date);
});