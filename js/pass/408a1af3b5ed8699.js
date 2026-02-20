let instance = new Temporal.Duration(1, 0, 0, 0, 24);
let result;
let relativeTo;
let action = relativeTo => instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "1970-01-01T00:00-00:45:00[-00:45]";
result = action(relativeTo);
relativeTo = {
  year: 1970,
  month: 1,
  day: 1,
  offset: "+00:45:00.000000000",
  timeZone: "+00:45"
};
result = action(relativeTo);
relativeTo = "1970-01-01T00:00:00-00:45[Africa/Monrovia]";
result = action(relativeTo);
relativeTo = "1970-01-01T00:00:00-00:44:30[Africa/Monrovia]";
result = action(relativeTo);
relativeTo = "1970-01-01T00:00:00-00:44:40[Africa/Monrovia]";
relativeTo = "1970-01-01T00:00:00-00:45:00[Africa/Monrovia]";
relativeTo = "1970-01-01T00:00+00:44:30.123456789[+00:45]";
relativeTo = {
  year: 1970,
  month: 1,
  day: 1,
  offset: "-00:45",
  timeZone: "Africa/Monrovia"
};
instance = new Temporal.Duration(0, 0, 0, 1);
action = relativeTo => instance.total({
  unit: "seconds",
  relativeTo
});