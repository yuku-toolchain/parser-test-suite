const date = new Temporal.PlainDate(2000, 5, 2);
const defaultFormatter = new Intl.DateTimeFormat('en', Object.create(null));
const expected = defaultFormatter.format(date);
const actualExplicit = date.toLocaleString('en', undefined);
const actualImplicit = date.toLocaleString('en');