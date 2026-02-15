const okTests = [[{
  monthCode: "M08",
  day: 1,
  calendar: "gregory"
}, "gregory", "monthCode and non-ISO Gregorian string calendar"], [{
  monthCode: "M08",
  day: 1,
  calendar: "hebrew"
}, "hebrew", "monthCode and non-ISO non-Gregorian string calendar"]];
for (const [argument, expectedCalendar, description] of okTests) {
  const plainMonthDay = Temporal.PlainMonthDay.from(argument);
  TemporalHelpers.assertPlainMonthDay(plainMonthDay, "M08", 1, description);
}
const notOkTests = [[{
  month: 8,
  day: 1,
  calendar: "gregory"
}, "month and non-ISO string calendar"], [{
  month: 8,
  day: 1,
  calendar: "hebrew"
}, "month and non-ISO non-Gregorian string calendar"]];
for (const [argument, description] of notOkTests) {}