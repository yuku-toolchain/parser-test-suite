const defaultFormatter = new Intl.DateTimeFormat([], Object.create(null));
const {calendar} = defaultFormatter.resolvedOptions();
const monthday = new Temporal.PlainMonthDay(5, 2, calendar);
const expected = defaultFormatter.format(monthday);
const actualExplicit = monthday.toLocaleString(undefined);
const actualImplicit = monthday.toLocaleString();