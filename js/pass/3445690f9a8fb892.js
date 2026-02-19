const defaultFormatter = new Intl.DateTimeFormat('en', Object.create(null));
const {calendar} = defaultFormatter.resolvedOptions();
const monthday = new Temporal.PlainMonthDay(5, 2, calendar);
const expected = defaultFormatter.format(monthday);
const actualExplicit = monthday.toLocaleString('en', undefined);
const actualImplicit = monthday.toLocaleString('en');