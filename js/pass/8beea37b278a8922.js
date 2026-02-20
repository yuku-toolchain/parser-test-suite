const fields = ["hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
const latest = Temporal.Instant.fromEpochNanoseconds(8640000_000_000_000_000_000n);
fields.forEach(field => {});
const earliest = Temporal.Instant.fromEpochNanoseconds(-8640000_000_000_000_000_000n);
fields.forEach(field => {});