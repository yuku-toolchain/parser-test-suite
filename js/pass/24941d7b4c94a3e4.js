const date = new Temporal.PlainDate(2000, 5, 2);
const invalidValues = ["ALWAYS", "sometimes", "other string", "auto\0"];
for (const calendarName of invalidValues) {}