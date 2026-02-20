const conflictingOptions = [["weekday", "short"], ["era", "short"], ["year", "numeric"], ["month", "numeric"], ["day", "numeric"], ["hour", "numeric"], ["minute", "numeric"], ["second", "numeric"], ["dayPeriod", "short"], ["fractionalSecondDigits", 3], ["timeZoneName", "short"]];
const datetime = new Temporal.ZonedDateTime(957270896_987_650_000n, "UTC");
for (const [option, value] of conflictingOptions) {
  datetime.toLocaleString("en", {
    [option]: value,
    dateStyle: undefined
  });
  datetime.toLocaleString("en", {
    [option]: value,
    timeStyle: undefined
  });
}