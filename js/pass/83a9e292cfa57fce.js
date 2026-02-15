const conflictingOptions = [["weekday", "short"], ["era", "short"], ["year", "numeric"], ["month", "numeric"], ["day", "numeric"], ["hour", "numeric"], ["minute", "numeric"], ["second", "numeric"], ["dayPeriod", "short"], ["fractionalSecondDigits", 3]];
const instant = new Temporal.Instant(957270896_987_650_000n);
for (const [option, value] of conflictingOptions) {
  instant.toLocaleString("en", {
    [option]: value,
    dateStyle: undefined
  });
  instant.toLocaleString("en", {
    [option]: value,
    timeStyle: undefined
  });
}