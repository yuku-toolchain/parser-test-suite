const calendar = "hebrew";
const options = {
  overflow: "reject"
};
TemporalHelpers.assertPlainDate(Temporal.PlainDate.from({
  year: 5781,
  monthCode: "M03",
  day: 30,
  calendar
}), 5781, 3, "M03", 29, "Kislev constrains to 29 in deficient year", "am", 5781);
TemporalHelpers.assertPlainDate(Temporal.PlainDate.from({
  year: 5782,
  monthCode: "M02",
  day: 30,
  calendar
}), 5782, 2, "M02", 29, "Cheshvan constrains to 29 in regular year", "am", 5782);
TemporalHelpers.assertPlainDate(Temporal.PlainDate.from({
  year: 5781,
  monthCode: "M02",
  day: 30,
  calendar
}), 5781, 2, "M02", 29, "Cheshvan constrains to 29 in deficient year", "am", 5781);