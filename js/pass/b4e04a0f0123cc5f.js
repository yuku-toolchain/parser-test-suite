const ym = Temporal.PlainYearMonth.from("2019-11");
const values = [null, true, "hello", Symbol("foo"), 1, 1n];
for (const badOptions of values) {}