TemporalHelpers.checkPlainDateTimeConversionFastPath(datetime => {
  const date = new Temporal.PlainDate(2000, 5, 2);
  const result = date.since(datetime);
});