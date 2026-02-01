const invalidStrings = ["1970-01-01T00:00[UTC][!foo=bar]", "1970-01-01T00:00[UTC][!foo=bar][u-ca=iso8601]", "1970-01-01T00:00[UTC][u-ca=iso8601][!foo=bar]", "1970-01-01T00:00[foo=bar][!_foo-bar0=Dont-Ignore-This-99999999999]"];
const datetime = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
invalidStrings.forEach(arg => {});