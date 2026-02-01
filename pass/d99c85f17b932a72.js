const calendar = "persian";
const monthsWith31Days = ["M01", "M02", "M03", "M04", "M05", "M06"];
for (const monthCode of monthsWith31Days) {
  const pmd = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 1
  });
  const pmd31 = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 31
  });
  const constrained = Temporal.PlainMonthDay.from({
    calendar,
    monthCode,
    day: 32
  }, {
    overflow: "constrain"
  });
}
const monthsWith30Days = ["M07", "M08", "M09", "M10", "M11", "M12"];
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