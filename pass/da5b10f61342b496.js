const badOptions = [null, true, "some string", Symbol(), 1, 2n];
const instance = new Temporal.PlainYearMonth(2019, 10);
for (const value of badOptions) {}