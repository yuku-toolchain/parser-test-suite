let instance = new Temporal.Duration(1, 0, 0, 0, 24);
let result;
let relativeTo;
let action = relativeTo => instance.round({
  largestUnit: "years",
  relativeTo
});
relativeTo = "1970-01-01T00:00-00:45:00[-00:45]";
result = action(relativeTo);
TemporalHelpers.assertDateDuration(result, 1, 0, 0, 1, "ISO string offset accepted with zero seconds (string)");
relativeTo = {
  year: 1970,
  month: 1,
  day: 1,
  offset: "+00:45:00.000000000",
  timeZone: "+00:45"
};
result = action(relativeTo);
TemporalHelpers.assertDateDuration(result, 1, 0, 0, 1, "ISO string offset accepted with zero seconds (property bag)");
relativeTo = "1970-01-01T00:00:00-00:45[Africa/Monrovia]";
result = action(relativeTo);
TemporalHelpers.assertDateDuration(result, 1, 0, 0, 1, "rounded HH:MM is accepted in string offset");
relativeTo = "1970-01-01T00:00:00-00:44:30[Africa/Monrovia]";
result = action(relativeTo);
TemporalHelpers.assertDateDuration(result, 1, 0, 0, 1, "unrounded HH:MM:SS is accepted in string offset");
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
action = relativeTo => instance.round({
  largestUnit: "seconds",
  relativeTo
});
TemporalHelpers.assertDuration(action("1952-10-15T23:59:59-11:19:40[Pacific/Niue]"), 0, 0, 0, 0, 0, 0, 86420, 0, 0, 0, "-11:19:40 is accepted as -11:19:40 in Pacific/Niue edge case");
TemporalHelpers.assertDuration(action("1952-10-15T23:59:59-11:20[Pacific/Niue]"), 0, 0, 0, 0, 0, 0, 86420, 0, 0, 0, "-11:20 matches the first candidate -11:19:40 in the Pacific/Niue edge case");
TemporalHelpers.assertDuration(action("1952-10-15T23:59:59-11:20:00[Pacific/Niue]"), 0, 0, 0, 0, 0, 0, 86400, 0, 0, 0, "-11:20:00 is accepted as -11:20:00 in the Pacific/Niue edge case");