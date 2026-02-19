const conflictingOptions = [["hour", "numeric"], ["minute", "numeric"], ["second", "numeric"], ["dayPeriod", "short"], ["fractionalSecondDigits", 3]];
const time = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
for (const [option, value] of conflictingOptions) {
  time.toLocaleString("en", {
    [option]: value,
    dateStyle: undefined
  });
  time.toLocaleString("en", {
    [option]: value,
    timeStyle: undefined
  });
}