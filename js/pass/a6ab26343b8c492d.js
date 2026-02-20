const invalidStrings = ["1970-01-01T00:00Z[UTC][UTC]", "1970-01-01T00:00Z[!UTC][UTC]", "1970-01-01T00:00Z[UTC][!UTC]", "1970-01-01T00:00Z[UTC][u-ca=iso8601][UTC]", "1970-01-01T00:00Z[UTC][foo=bar][UTC]"];
const instance = new Temporal.Instant(0n);
invalidStrings.forEach(arg => {});