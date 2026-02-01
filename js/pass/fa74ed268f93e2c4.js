TemporalHelpers.checkToTemporalPlainDateTimeFastPath((date, calendar) => {
  const datetime = new Temporal.PlainDateTime(2000, 5, 2, 0, 0, 0, 0, 0, 0, calendar);
});