const badOptions = [null, true, "some string", Symbol(), 1, 2n];
const instance = new Temporal.ZonedDateTime(0n, "UTC");
for (const value of badOptions) {}