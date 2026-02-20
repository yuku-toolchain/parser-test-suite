const formatter = new Intl.DateTimeFormat();
const {timeZone, ...options} = formatter.resolvedOptions();
const datetime1 = new Temporal.ZonedDateTime(0n, timeZone);
const datetime2 = new Temporal.ZonedDateTime(1_000_000_000n, timeZone);