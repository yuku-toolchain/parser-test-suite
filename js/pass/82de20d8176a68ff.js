const calendar = "buddhist";
const options = {
  overflow: "reject"
};
for (var year = 2513; year < 2593; year++) {
  const date = Temporal.PlainDateTime.from({
    year,
    month: 1,
    calendar,
    day: 1,
    hour: 12,
    minute: 34
  });
}