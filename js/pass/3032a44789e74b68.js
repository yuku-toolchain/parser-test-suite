const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_650_000n, "UTC");
for (const fractionalSecondDigits of ["other string", "AUTO", "not-auto", "autos", "auto\0"]) {}