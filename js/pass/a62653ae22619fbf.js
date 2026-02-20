const date = new Temporal.ZonedDateTime(3661_987_654_321n, "UTC");
const result = date.toString({
  calendarName: "critical"
});