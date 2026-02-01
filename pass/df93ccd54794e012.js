const calendar = "islamic-civil";
const monthsWith30Days = ["M01", "M03", "M05", "M07", "M09", "M11", "M12"];
for (const monthCode of monthsWith30Days) {
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
const monthsWith29Days = ["M02", "M04", "M06", "M08", "M10"];
for (const monthCode of monthsWith29Days) {
  const pmd = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 1
  });
  const pmd29 = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 29
  });
  const constrained = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 30
  }, {
    overflow: "constrain"
  });
}