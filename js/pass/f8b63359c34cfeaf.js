const calendar = "chinese";
const monthCodes = ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"];
for (const monthCode of monthCodes) {
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