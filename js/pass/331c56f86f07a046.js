const options = {
  overflow: "reject"
};
const instance = Temporal.PlainYearMonth.from({
  year: 1981,
  monthCode: "M12",
  calendar: "dangi"
}, options);
TemporalHelpers.assertPlainYearMonth(instance, 1981, 12, "M12", "check that all fields are as expected", undefined, undefined, null);
TemporalHelpers.assertPlainYearMonth(instance.with({
  month: 5
}, options), 1981, 5, "M05", "month excludes monthCode", undefined, undefined, null);
TemporalHelpers.assertPlainYearMonth(instance.with({
  monthCode: "M05"
}, options), 1981, 5, "M05", "monthCode excludes month", undefined, undefined, null);