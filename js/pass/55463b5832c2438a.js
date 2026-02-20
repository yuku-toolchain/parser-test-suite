const instance = new Temporal.Duration(1, 0, 0, 0, 24);
let relativeTo = "2016-12-31T23:59:60";
const result1 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2016-12-31T23:59:60+00:00[UTC]";
const result2 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = {
  year: 2016,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
  second: 60
};
const result3 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = {
  year: 2016,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
  second: 60,
  timeZone: "UTC"
};
const result4 = instance.total({
  unit: "days",
  relativeTo
});