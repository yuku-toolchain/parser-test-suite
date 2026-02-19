const instance = Temporal.PlainTime.from("12:56:32");
const values = [null, true, "hello", Symbol("foo"), 1, 1n];
for (const badOptions of values) {}