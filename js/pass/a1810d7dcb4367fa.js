const instance = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
const args = [undefined, null, true, "2020-01-12T10:20:30", Symbol(), 2020, 2020n, NaN];
for (const argument of args) {}