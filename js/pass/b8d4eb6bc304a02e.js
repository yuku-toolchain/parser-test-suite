const invalidStrings = ["1970-01-01T00:00[UTC][UTC]", "1970-01-01T00:00[!UTC][UTC]", "1970-01-01T00:00[UTC][!UTC]", "1970-01-01T00:00[UTC][u-ca=iso8601][UTC]", "1970-01-01T00:00[UTC][foo=bar][UTC]"];
const instance = new Temporal.ZonedDateTime(0n, "UTC");
invalidStrings.forEach(arg => {});