const conflictingOptions = [["era", "short"], ["year", "numeric"], ["month", "numeric"]];
const calendar = new Intl.DateTimeFormat("en").resolvedOptions().calendar;
const ym = new Temporal.PlainYearMonth(2024, 4, calendar);
ym.toLocaleString("en", {
  dateStyle: "short"
});
for (const [option, value] of conflictingOptions) {
  ym.toLocaleString("en", {
    [option]: value,
    dateStyle: undefined
  });
  ym.toLocaleString("en", {
    [option]: value,
    timeStyle: undefined
  });
}