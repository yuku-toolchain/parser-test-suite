const oneYear = new Temporal.Duration(1);
const oneMonth = new Temporal.Duration(0, 1);
const oneWeek = new Temporal.Duration(0, 0, 1);
const oneDay = new Temporal.Duration(0, 0, 0, 1);
const options = {
  largestUnit: "days"
};
TemporalHelpers.assertDuration(oneDay.round(options), 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, "days do not require relativeTo");
["months", "weeks"].forEach(largestUnit => {
  [oneDay, oneWeek, oneMonth, oneYear].forEach(duration => {});
});