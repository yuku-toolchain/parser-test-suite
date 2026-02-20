const calendar = "ethioaa";
const options = {
  overflow: "reject"
};
for (var year = 7462; year < 7542; year++) {
  const date = Temporal.PlainDate.from({
    year,
    month: 1,
    calendar,
    day: 1
  });
}