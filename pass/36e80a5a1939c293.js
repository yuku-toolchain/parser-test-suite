const inst = new Temporal.Instant(1_000_000_000_000_000_000n);
const zdt = inst.toZonedDateTimeISO("UTC");
const zdtNonUTC = inst.toZonedDateTimeISO("-05:00");