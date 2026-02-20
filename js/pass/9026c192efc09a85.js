const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
const invalidValues = ["ALWAYS", "sometimes", "other string", "auto\0"];
for (const calendarName of invalidValues) {}