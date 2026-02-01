const duration = new Temporal.Duration(0, 0, 0, 0, 12, 34, 56, 123, 987, 500);
const badValues = ["era", "eraYear", "millisecond\0", "mill\u0131second", "SECOND", "eras", "eraYears", "milliseconds\0", "mill\u0131seconds", "SECONDS", "other string"];
for (const smallestUnit of badValues) {}