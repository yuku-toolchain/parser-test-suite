const instant = new Temporal.Instant(1_000_000_000_987_650_000n);
for (const fractionalSecondDigits of ["other string", "AUTO", "not-auto", "autos", "auto\0"]) {}