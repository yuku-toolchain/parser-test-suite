const conflictingOptions = [["weekday", "short"], ["era", "short"], ["year", "numeric"], ["month", "numeric"], ["day", "numeric"], ["hour", "numeric"], ["minute", "numeric"], ["second", "numeric"], ["dayPeriod", "short"], ["fractionalSecondDigits", 3]];
const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
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