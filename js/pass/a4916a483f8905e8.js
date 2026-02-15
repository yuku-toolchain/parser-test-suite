TemporalHelpers.checkToTemporalPlainDateTimeFastPath(date => {
  const result = Temporal.PlainDateTime.from(date);
  TemporalHelpers.assertPlainDateTime(result, 2000, 5, "M05", 2, 0, 0, 0, 0, 0, 0, "midnight is assumed");
});