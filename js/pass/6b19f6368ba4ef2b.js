const conflictingOptions = [["weekday", "short"], ["era", "short"], ["year", "numeric"], ["month", "numeric"], ["day", "numeric"]];
const date = new Temporal.PlainDate(2000, 5, 2);
for (const [option, value] of conflictingOptions) {
  date.toLocaleString("en", {
    [option]: value,
    dateStyle: undefined
  });
  date.toLocaleString("en", {
    [option]: value,
    timeStyle: undefined
  });
}