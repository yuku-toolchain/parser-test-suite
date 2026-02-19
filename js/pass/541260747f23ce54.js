const badOptions = [undefined, null, true, Symbol(), 1, 2n];
const instance = new Temporal.Instant(0n);
for (const value of badOptions) {}