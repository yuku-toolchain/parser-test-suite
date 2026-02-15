const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
for (const roundingMode of ["other string", "cile", "CEIL", "ce\u0131l", "auto", "halfexpand", "floor\0"]) {}