const date1 = Temporal.ZonedDateTime.from({
  calendar: "gregory",
  era: "ad",
  eraYear: 2024,
  year: 2024,
  month: 1,
  day: 1,
  timeZone: "UTC"
});
const date2 = Temporal.ZonedDateTime.from({
  calendar: "gregory",
  era: "bc",
  eraYear: 44,
  year: -43,
  month: 3,
  day: 15,
  timeZone: "Europe/Rome"
});