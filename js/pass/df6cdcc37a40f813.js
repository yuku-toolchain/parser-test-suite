TemporalHelpers.checkSubclassingIgnored(Temporal.PlainDate, [2000, 5, 2], "withCalendar", ["iso8601"], result => {
  TemporalHelpers.assertPlainDate(result, 2000, 5, "M05", 2);
});