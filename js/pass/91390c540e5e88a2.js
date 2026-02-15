const oneDay = new Temporal.Duration(0, 0, 0, 1);
const hours48 = new Temporal.Duration(0, 0, 0, 0, 48);
const plainRelativeTo = new Temporal.PlainDate(2017, 1, 1);
const zonedRelativeTo = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "+04:30");