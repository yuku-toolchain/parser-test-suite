const timeZone = "Africa/Monrovia";
const instance = new Temporal.ZonedDateTime(0n, timeZone);
let result = instance.since("1970-01-01T00:44:30-00:44:30[Africa/Monrovia]");
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, -1, -29, 0, 0, 0, 0, "UTC offset rounded to minutes is accepted");
result = instance.since("1970-01-01T00:44:30-00:44:30[Africa/Monrovia]");
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, -1, -29, 0, 0, 0, 0, "Unrounded sub-minute UTC offset also accepted");
const properties = {
  offset: "-00:45",
  year: 1970,
  month: 1,
  day: 1,
  minute: 44,
  second: 30,
  timeZone
};
const reference = new Temporal.ZonedDateTime(-543069621_000_000_000n, "Pacific/Niue");
TemporalHelpers.assertDuration(reference.since("1952-10-15T23:59:59-11:19:40[Pacific/Niue]"), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "-11:19:40 is accepted as -11:19:40 in Pacific/Niue edge case");
TemporalHelpers.assertDuration(reference.since("1952-10-15T23:59:59-11:20[Pacific/Niue]"), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "-11:20 matches the first candidate -11:19:40 in the Pacific/Niue edge case");
TemporalHelpers.assertDuration(reference.since("1952-10-15T23:59:59-11:20:00[Pacific/Niue]"), 0, 0, 0, 0, 0, 0, -20, 0, 0, 0, "-11:20:00 is accepted as -11:20:00 in the Pacific/Niue edge case");