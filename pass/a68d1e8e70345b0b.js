const calendar = "coptic";
const options = {
  overflow: "reject"
};
for (var year = 1686; year < 1766; year++) {
  const date = Temporal.PlainYearMonth.from({
    year,
    month: 1,
    calendar
  });
}