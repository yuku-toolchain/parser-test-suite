const badOptions = [undefined, null, true, Symbol(), 1, 2n];
const instance = new Temporal.ZonedDateTime(0n, "UTC");
for (const value of badOptions) {}