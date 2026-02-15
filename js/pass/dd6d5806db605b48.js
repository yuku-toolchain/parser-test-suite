const badOptions = [undefined, null, true, Symbol(), 1, 2n];
const instance = new Temporal.Duration(0, 0, 0, 0, 1);
for (const value of badOptions) {}