const invalidStrings = ["-000000-12-07T03:24:30", "-000000-12-07T03:24:30+01:00", "-000000-12-07T03:24:30+00:00[UTC]"];
const timeZone = "UTC";
const instance = new Temporal.ZonedDateTime(0n, timeZone);
invalidStrings.forEach(arg => {});