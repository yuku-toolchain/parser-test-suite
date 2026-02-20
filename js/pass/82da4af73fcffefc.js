const defaultFormatter = new Intl.DateTimeFormat("en");
const {calendar} = defaultFormatter.resolvedOptions();
const monthday = new Temporal.PlainMonthDay(5, 2, calendar);
const expected = defaultFormatter.format(monthday);
const actual = monthday.toLocaleString("en", {
  dateStyle: undefined
});