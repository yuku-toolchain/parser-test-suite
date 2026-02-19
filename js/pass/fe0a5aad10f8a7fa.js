const earlier = new Temporal.Instant(1_000_000_000_000_000_000n);
const later = new Temporal.Instant(1_000_090_061_123_987_500n);
for (const roundingMode of ["other string", "cile", "CEIL", "ce\u0131l", "auto", "halfexpand", "floor\0"]) {}