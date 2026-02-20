TemporalHelpers.checkToTemporalCalendarFastPath(temporalObject => {
  const result = Temporal.PlainMonthDay.from({
    monthCode: "M05",
    day: 2,
    calendar: temporalObject
  });
});