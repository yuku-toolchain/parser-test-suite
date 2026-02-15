const calendar = "coptic";
const options = {
  overflow: "reject"
};
const common1230 = Temporal.PlainDate.from({
  year: 1738,
  monthCode: "M12",
  day: 30,
  calendar
}, options);
const leap0130 = Temporal.PlainDate.from({
  year: 1739,
  monthCode: "M01",
  day: 30,
  calendar
}, options);
const leap1230 = Temporal.PlainDate.from({
  year: 1739,
  monthCode: "M12",
  day: 30,
  calendar
}, options);
const common0130 = Temporal.PlainDate.from({
  year: 1740,
  monthCode: "M01",
  day: 30,
  calendar
}, options);
const months1 = new Temporal.Duration(0, 1);
const months1n = new Temporal.Duration(0, -1);
TemporalHelpers.assertPlainDate(common1230.add(months1), 1738, 13, "M13", 5, "Adding 1 month to last day of Mesori constrains to day 5 of common-year epagomenal month", "am", 1738);
TemporalHelpers.assertPlainDate(leap1230.add(months1), 1739, 13, "M13", 6, "Adding 1 month to last day of Mesori constrains to day 6 of leap-year epagomenal month", "am", 1739);
TemporalHelpers.assertPlainDate(leap0130.add(months1n), 1738, 13, "M13", 5, "Subtracting 1 month from last day of Thout constrains to day 5 of common-year epagomenal month", "am", 1738);
TemporalHelpers.assertPlainDate(common0130.add(months1n), 1739, 13, "M13", 6, "Subtracting 1 month from last day of Thout constrains to day 6 of leap-year epagomenal month", "am", 1739);