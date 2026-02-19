const instance = new Temporal.Instant(0n);
const invalidStrings = ["-000000-03-30T00:45Z", "-000000-03-30T01:45+01:00", "-000000-03-30T01:45:00+00:00[UTC]"];
invalidStrings.forEach(arg => {});