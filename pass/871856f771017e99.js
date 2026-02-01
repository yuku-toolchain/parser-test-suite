const datetime = new Temporal.ZonedDateTime(0n, "UTC");
const wrongTypeTests = [[null, "null"], [true, "boolean"], [1, "number"], [1n, "bigint"], [19970327, "large number"], [-19970327, "negative number"], [1234567890, "very large integer"], [Symbol(), "symbol"], [{}, "object"], [new Temporal.Duration(), "duration instance"]];
for (const [calendar, description] of wrongTypeTests) {
  const arg = {
    year: 1970,
    monthCode: "M01",
    day: 1,
    calendar,
    timeZone: "UTC"
  };
}