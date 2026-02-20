const calendar = "ethioaa";
const options = {
  overflow: "reject"
};
const common1230 = Temporal.PlainDate.from({
  year: 7514,
  monthCode: "M12",
  day: 30,
  calendar
}, options);
const leap1230 = Temporal.PlainDate.from({
  year: 7515,
  monthCode: "M12",
  day: 30,
  calendar
}, options);
TemporalHelpers.assertPlainDate(common1230.with({
  monthCode: "M13"
}), 7514, 13, "M13", 5, "Changing month constrains to day 5 of common-year epagomenal month", "aa", 7514);
TemporalHelpers.assertPlainDate(leap1230.with({
  monthCode: "M13"
}), 7515, 13, "M13", 6, "Changing month constrains to day 6 of leap-year epagomenal month", "aa", 7515);