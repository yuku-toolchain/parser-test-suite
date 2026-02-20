const badOptions = [undefined, null, true, Symbol(), 1, 2n];
const instance = new Temporal.PlainTime();
for (const value of badOptions) {}