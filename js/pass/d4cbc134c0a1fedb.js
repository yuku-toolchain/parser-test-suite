const result = Temporal.ZonedDateTime.from({
  era: "foobar",
  eraYear: 1,
  year: 1970,
  monthCode: "M01",
  day: 1,
  timeZone: "UTC",
  calendar: "iso8601"
});
const resultChinese = Temporal.ZonedDateTime.from({
  era: "foobar",
  eraYear: 1,
  year: 1969,
  monthCode: "M11",
  day: 24,
  timeZone: "UTC",
  calendar: "chinese"
});