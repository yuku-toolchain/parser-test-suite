const invalidStrings = ["1970-01-01T00:00[UTC][u-ca=iso8601][!u-ca=iso8601]", "1970-01-01T00:00[UTC][!u-ca=iso8601][u-ca=iso8601]", "1970-01-01T00:00[UTC][u-ca=iso8601][foo=bar][!u-ca=iso8601]"];
const datetime = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
invalidStrings.forEach(arg => {});