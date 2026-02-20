TemporalHelpers.checkToTemporalPlainDateTimeFastPath((date, calendar) => {
  const datetime = new Temporal.PlainDateTime(2000, 5, 2, 0, 0, 0, 987, 654, 321, calendar);
  const result = datetime.since(date);
});