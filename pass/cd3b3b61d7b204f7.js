const zdt = new Temporal.ZonedDateTime(0n, "UTC");
const rangeErrorValues = [false, 42, 55n, null];
for (const badValue of rangeErrorValues) {}