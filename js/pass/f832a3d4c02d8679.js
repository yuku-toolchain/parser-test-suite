const options = {
  overflow: "reject"
};
const instance = Temporal.PlainDate.from({
  year: 1981,
  monthCode: "M12",
  day: 15,
  calendar: "dangi"
}, options);
TemporalHelpers.assertPlainDate(instance, 1981, 12, "M12", 15, "check that all fields are as expected");
TemporalHelpers.assertPlainDate(instance.with({
  month: 5
}, options), 1981, 5, "M05", 15, "month excludes monthCode");
TemporalHelpers.assertPlainDate(instance.with({
  monthCode: "M05"
}, options), 1981, 5, "M05", 15, "monthCode excludes month");