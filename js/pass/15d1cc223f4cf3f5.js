const date = new Temporal.PlainDate(2000, 5, 2);
const defaultFormatter = new Intl.DateTimeFormat("en");
const expected = defaultFormatter.format(date);
const actualDate = date.toLocaleString("en", {
  dateStyle: undefined
});
const actualTime = date.toLocaleString("en", {
  timeStyle: undefined
});