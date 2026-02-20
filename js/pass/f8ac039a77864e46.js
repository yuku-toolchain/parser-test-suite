const instant = new Temporal.Instant(957270896_987_650_000n);
const defaultFormatter = new Intl.DateTimeFormat('en', Object.create(null));
const expected = defaultFormatter.format(instant);
const actualExplicit = instant.toLocaleString('en', undefined);
const actualImplicit = instant.toLocaleString('en');