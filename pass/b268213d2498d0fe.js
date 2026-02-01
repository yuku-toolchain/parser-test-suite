const calendar = "ethioaa";
const options = {
  overflow: "reject"
};
const common1230 = Temporal.ZonedDateTime.from({
  year: 7514,
  monthCode: "M12",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
const leap1230 = Temporal.ZonedDateTime.from({
  year: 7515,
  monthCode: "M12",
  day: 30,
  hour: 12,
  minute: 34,
  timeZone: "UTC",
  calendar
}, options);
TemporalHelpers.assertPlainDateTime(common1230.with({
  monthCode: "M13"
}).toPlainDateTime(), 7514, 13, "M13", 5, 12, 34, 0, 0, 0, 0, "Changing month constrains to day 5 of common-year epagomenal month", "aa", 7514);
TemporalHelpers.assertPlainDateTime(leap1230.with({
  monthCode: "M13"
}).toPlainDateTime(), 7515, 13, "M13", 6, 12, 34, 0, 0, 0, 0, "Changing month constrains to day 6 of leap-year epagomenal month", "aa", 7515);