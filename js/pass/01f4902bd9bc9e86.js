const instance = new Temporal.ZonedDateTime(0n, "UTC");
const invalidStrings = ["-0000000-01-01T00:02Z[UTC]", "-0000000-01-01T00:02+00:00[UTC]", "-0000000-01-01T00:02:00.000000000+00:00[UTC]"];
invalidStrings.forEach(arg => {});