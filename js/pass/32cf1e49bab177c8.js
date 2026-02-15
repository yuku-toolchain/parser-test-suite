let duration1 = new Temporal.Duration(0, 0, 0, 31);
let duration2 = new Temporal.Duration(0, 1);
let result;
let relativeTo;
const action = relativeTo => Temporal.Duration.compare(duration1, duration2, {
  relativeTo
});
relativeTo = "1970-01-01T00:00:00-00:45[Africa/Monrovia]";
result = action(relativeTo);
relativeTo = "1970-01-01T00:00:00-00:44:30[Africa/Monrovia]";
result = action(relativeTo);
relativeTo = "1970-01-01T00:00:00-00:44:40[Africa/Monrovia]";
relativeTo = "1970-01-01T00:00:00-00:45:00[Africa/Monrovia]";
relativeTo = {
  year: 1970,
  month: 1,
  day: 1,
  offset: "-00:45",
  timeZone: "Africa/Monrovia"
};
duration1 = new Temporal.Duration(0, 0, 0, 0, 24);
duration2 = new Temporal.Duration(0, 0, 0, 1);