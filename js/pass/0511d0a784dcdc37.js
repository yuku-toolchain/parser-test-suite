const invalidStrings = ["-000000-10-31T17:45Z", "-000000-10-31T17:45+00:00[UTC]"];
const instance = new Temporal.ZonedDateTime(0n, "UTC");
invalidStrings.forEach(timeZone => {});