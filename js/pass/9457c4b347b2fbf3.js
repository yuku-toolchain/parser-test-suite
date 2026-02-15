const calendar = "ethiopic";
const options = {
  overflow: "reject"
};
for (var year = 7462; year < 7542; year++) {
  const date = Temporal.PlainYearMonth.from({
    year,
    month: 1,
    calendar
  });
}