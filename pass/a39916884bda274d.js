const calendar = "islamic-umalqura";
const options = {
  overflow: "reject"
};
for (var year = 1390; year < 1470; year++) {
  const date = Temporal.PlainDateTime.from({
    year,
    month: 1,
    calendar,
    day: 1,
    hour: 12,
    minute: 34
  });
}