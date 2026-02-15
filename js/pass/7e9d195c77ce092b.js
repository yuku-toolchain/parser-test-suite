const datetime = new Temporal.ZonedDateTime(3661_987_654_321n, "UTC");
const result = datetime.toString({
  calendarName: undefined
});