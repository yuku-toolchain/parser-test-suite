const calendar = "japanese";
const options = {
  overflow: "reject"
};
for (var year = 1892; year < 1972; year++) {
  const date = Temporal.PlainDate.from({
    year,
    month: 1,
    calendar,
    day: 1
  });
}