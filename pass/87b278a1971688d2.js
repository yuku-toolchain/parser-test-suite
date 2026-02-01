const instant = new Temporal.Instant(957270896_987_650_000n);
const defaultFormatter = new Intl.DateTimeFormat([], Object.create(null));
const expected = defaultFormatter.format(instant);
const actualExplicit = instant.toLocaleString(undefined);
const actualImplicit = instant.toLocaleString();