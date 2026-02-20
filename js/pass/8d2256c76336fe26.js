const calendar = "gregory";
const options = {
  overflow: "reject"
};
const year = 1970;
for (var month = 1; month < 13; month++) {
  const date = Temporal.PlainDate.from({
    year,
    month,
    day: 1,
    calendar
  });
  const daysInMonth = date.daysInMonth;
  const oneDayPastMonthEnd = date.with({
    day: daysInMonth + 1
  });
}