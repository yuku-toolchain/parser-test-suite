const badOptions = [null, true, "some string", Symbol(), 1, 2n];
const instance = new Temporal.Instant(0n);
for (const value of badOptions) {}