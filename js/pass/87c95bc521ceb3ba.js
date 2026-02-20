const monthday = new Temporal.PlainMonthDay(5, 2);
const invalidValues = ["ALWAYS", "sometimes", "other string", "auto\0"];
for (const calendarName of invalidValues) {}