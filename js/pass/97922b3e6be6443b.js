const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_64_321n, "UTC");
const invalidValues = ["NEVER", "sometimes", "other string", "auto\0"];
for (const timeZoneName of invalidValues) {}