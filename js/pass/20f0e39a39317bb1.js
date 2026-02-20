const badOptions = [null, true, "some string", Symbol(), 1, 2n];
const instance = new Temporal.PlainTime();
for (const value of badOptions) {}