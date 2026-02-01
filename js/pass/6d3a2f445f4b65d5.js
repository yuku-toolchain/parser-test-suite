const calendar = "chinese";
const daysInMonthCases = [{
  year: 2001,
  leap: "M04L",
  days: [30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30]
}];
for (var {year, leap, days} of daysInMonthCases) {
  const date = Temporal.PlainDate.from({
    year,
    month: 1,
    day: 1,
    calendar
  });
  const leapMonth = date.with({
    monthCode: leap
  });
  const {monthsInYear} = date;
  for (var i = monthsInYear, leapMonthIndex = undefined, monthStart = undefined; i >= 1; i--) {
    monthStart = monthStart ? monthStart.add({
      months: -1
    }) : date.add({
      months: monthsInYear - 1
    });
    const {month, monthCode, daysInMonth} = monthStart;
    if (monthCode.endsWith("L")) {
      leapMonthIndex = i;
    } else {
      if (leapMonthIndex !== undefined && i === leapMonthIndex - 1) {
        const inLeapMonth = monthStart.with({
          monthCode: `M${month.toString().padStart(2, "0")}L`
        });
      } else {
        if (i === 13) {}
      }
    }
    const oneDayPastMonthEnd = monthStart.with({
      day: daysInMonth + 1
    });
  }
}