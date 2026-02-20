let duration = Temporal.Duration.from({
  weeks: 1,
  days: 0,
  hours: 1
});
let zdt = new Temporal.ZonedDateTime(0n, "UTC", "iso8601");
let result = duration.total({
  relativeTo: zdt,
  unit: "days"
});