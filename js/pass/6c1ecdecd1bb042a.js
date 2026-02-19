const formatter = new Intl.DateTimeFormat();
const {timeZone, ...options} = formatter.resolvedOptions();
const datetime = new Temporal.ZonedDateTime(0n, timeZone);