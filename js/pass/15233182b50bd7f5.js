const yearmonth = new Temporal.PlainYearMonth(2000, 5);
const invalidValues = ["ALWAYS", "sometimes", "other string", "auto\0"];
for (const calendarName of invalidValues) {}