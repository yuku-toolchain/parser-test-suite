const conflictingOptions = ["month", "day"];
const calendar = new Intl.DateTimeFormat("en").resolvedOptions().calendar;
const md = new Temporal.PlainMonthDay(4, 17, calendar);
md.toLocaleString("en", {
  dateStyle: "short"
});
for (const option of conflictingOptions) {
  md.toLocaleString("en", {
    [option]: "numeric",
    dateStyle: undefined
  });
  md.toLocaleString("en", {
    [option]: "numeric",
    timeStyle: undefined
  });
}