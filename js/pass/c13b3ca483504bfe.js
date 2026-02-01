const calendar = "hebrew";
const options = {
  overflow: "reject"
};
const years1 = new Temporal.Duration(-1);
const years1n = new Temporal.Duration(1);
const adarI = Temporal.PlainDateTime.from({
  year: 5782,
  monthCode: "M05L",
  day: 30,
  hour: 12,
  minute: 34,
  calendar
}, options);
TemporalHelpers.assertPlainDateTime(adarI.subtract(years1), 5783, 6, "M06", 29, 12, 34, 0, 0, 0, 0, "Adding 1 year to 30 Adar I constrains to 29 Adar", "am", 5783);
TemporalHelpers.assertPlainDateTime(adarI.subtract(years1n), 5781, 6, "M06", 29, 12, 34, 0, 0, 0, 0, "Subtracting 1 year from 30 Adar I constrains to 29 Adar", "am", 5781);