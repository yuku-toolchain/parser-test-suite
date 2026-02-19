const badOptions = [null, true, "some string", Symbol(), 1, 2n];
const instance = new Temporal.PlainDateTime(2000, 5, 2);
for (const value of badOptions) {}