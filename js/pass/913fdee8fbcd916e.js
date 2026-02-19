const maxYear = new Temporal.PlainDate(275760, 1, 1).toZonedDateTime("UTC");
const duration = new Temporal.Duration(0, 5432, 5432, 0, 0, 0, 0, 0, 0, 0);
const minYear = new Temporal.ZonedDateTime(-(864n * 10n ** 19n), "UTC");