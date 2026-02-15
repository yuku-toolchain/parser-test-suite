["2024-07-02T12:34+00:00[UTC][u-ca=islamicc]", {
  year: 1445,
  month: 12,
  day: 25,
  hour: 12,
  minute: 34,
  calendar: "islamicc",
  timeZone: "UTC"
}].forEach(arg => {
  const result = Temporal.ZonedDateTime.from(arg);
});