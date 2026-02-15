TemporalHelpers.checkPlainDateTimeConversionFastPath(datetime => {
  const result = Temporal.PlainDate.from(datetime);
  TemporalHelpers.assertPlainDate(result, 2000, 5, "M05", 2);
});