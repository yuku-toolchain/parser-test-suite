const calendar = "chinese";
const leapMonthsWith30Days = ["M03L", "M04L", "M05L", "M06L", "M07L"];
for (const monthCode of leapMonthsWith30Days) {
  const pmd = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 1
  });
  const pmd30 = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 30
  });
  const constrained = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 31
  }, {
    overflow: "constrain"
  });
}