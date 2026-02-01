const relativeTo = new Temporal.PlainDate(2024, 1, 1);
const months = Temporal.Duration.from({
  months: 9
});
TemporalHelpers.assertDuration(months.round({
  relativeTo,
  smallestUnit: "months",
  roundingIncrement: 8,
  roundingMode: "ceil"
}), 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, "OK to round to an increment of months");
TemporalHelpers.assertDuration(months.round({
  relativeTo,
  largestUnit: "years",
  smallestUnit: "months"
}), 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, "OK to balance to years while rounding to 1 month");
const weeks = Temporal.Duration.from({
  weeks: 7
});
TemporalHelpers.assertDuration(weeks.round({
  relativeTo,
  smallestUnit: "weeks",
  roundingIncrement: 6,
  roundingMode: "ceil"
}), 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, "OK to round to an increment of weeks");
TemporalHelpers.assertDuration(weeks.round({
  relativeTo,
  largestUnit: "months",
  smallestUnit: "weeks"
}), 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, "OK to balance to months while rounding to 1 week");
const days = Temporal.Duration.from({
  days: 31
});
TemporalHelpers.assertDuration(days.round({
  relativeTo,
  smallestUnit: "days",
  roundingIncrement: 30,
  roundingMode: "ceil"
}), 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, "OK to round to an increment of days");
TemporalHelpers.assertDuration(days.round({
  relativeTo,
  largestUnit: "weeks",
  smallestUnit: "days"
}), 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, "OK to balance to weeks while rounding to 1 day");