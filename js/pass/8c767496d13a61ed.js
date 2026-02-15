const expectedNanoseconds = BigInt((44 * 60 + 30) * 1e9);
const instance = new Temporal.ZonedDateTime(expectedNanoseconds, "Africa/Monrovia");
let result = instance.equals("1970-01-01T00:00:00-00:45[Africa/Monrovia]");
result = instance.equals("1970-01-01T00:00:00-00:44:30[Africa/Monrovia]");
const properties = {
  offset: "-00:45",
  year: 1970,
  month: 1,
  day: 1,
  minute: 44,
  second: 30,
  timeZone: "Africa/Monrovia"
};
const reference = new Temporal.ZonedDateTime(-543069621_000_000_000n, "Pacific/Niue");