const calendar = "roc";
const options = {
  overflow: "reject"
};
for (var year = 59; year < 139; year++) {
  const date = Temporal.PlainDateTime.from({
    year,
    month: 1,
    calendar,
    day: 1,
    hour: 12,
    minute: 34
  });
}