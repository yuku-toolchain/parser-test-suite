const badOptions = [null, true, "2021-01", Symbol(), 1, 2n];
const instance = new Temporal.PlainYearMonth(2019, 10);
for (const value of badOptions) {}