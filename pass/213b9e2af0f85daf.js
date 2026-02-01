const calendar = "hebrew";
const options = {
  overflow: "reject"
};
const years1 = new Temporal.Duration(-1);
const years1n = new Temporal.Duration(1);
const adarI = Temporal.PlainYearMonth.from({
  year: 5782,
  monthCode: "M05L",
  calendar
}, options);
TemporalHelpers.assertPlainYearMonth(adarI.subtract(years1), 5783, 6, "M06", "Adding 1 year to Adar I constrains to Adar", "am", 5783, null);
TemporalHelpers.assertPlainYearMonth(adarI.subtract(years1n), 5781, 6, "M06", "Subtracting 1 year from Adar I constrains to Adar", "am", 5781, null);