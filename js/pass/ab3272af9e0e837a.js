const blank1 = new Temporal.Duration();
const blank2 = new Temporal.Duration();
const {compare} = Temporal.Duration;
const plainRelativeTo = new Temporal.PlainDate(2025, 8, 22);
const zonedRelativeTo = new Temporal.ZonedDateTime(1n, "UTC");