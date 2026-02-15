const zdt = new Temporal.ZonedDateTime(0n, "UTC");
const badValues = [false, 42, 55n, Symbol("foo"), null];
for (const badValue of badValues) {}