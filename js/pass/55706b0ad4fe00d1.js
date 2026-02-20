const datetime = new Temporal.ZonedDateTime(0n, "UTC");
const invalidStrings = ["-000000-10-31", "-000000-10-31T17:45", "-000000-10-31T17:45Z", "-000000-10-31T17:45+01:00", "-000000-10-31T17:45+00:00[UTC]"];
invalidStrings.forEach(arg => {});