const oneYear = new Temporal.Duration(1);
const oneMonth = new Temporal.Duration(0, 1);
const oneWeek = new Temporal.Duration(0, 0, 1);
const oneDay = new Temporal.Duration(0, 0, 0, 1);
const options = {
  unit: "days"
};
["months", "weeks"].forEach(unit => {
  [oneDay, oneWeek, oneMonth, oneYear].forEach(duration => {});
});