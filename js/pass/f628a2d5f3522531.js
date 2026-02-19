TemporalHelpers.checkToTemporalCalendarFastPath(temporalObject => {
  const result = Temporal.PlainYearMonth.from({
    year: 2000,
    month: 5,
    calendar: temporalObject
  });
});