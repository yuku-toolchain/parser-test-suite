const date = new Temporal.PlainDate(2000, 5, 2);
const defaultFormatter = new Intl.DateTimeFormat([], Object.create(null));
const expected = defaultFormatter.format(date);
const actualExplicit = date.toLocaleString(undefined);
const actualImplicit = date.toLocaleString();