const instance = new Temporal.Duration(1, 0, 0, 0, 24);
let result;
let relativeTo;
const action = relativeTo => instance.total({
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
relativeTo = "1970-01-01T00:00+00:44:30.123456789[+00:45]";
relativeTo = "1970-01-01T00:00-00:44:59[-00:44:59]";