const instance = Temporal.ZonedDateTime.from({
  year: 1919,
  month: 3,
  day: 31,
  hour: 12,
  timeZone: "America/Toronto"
});
const result = instance.startOfDay();