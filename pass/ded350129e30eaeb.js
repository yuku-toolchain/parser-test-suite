const invalidStrings = ["2019-10-01T09:00:00Z", "2019-10-01T09:00:00Z[UTC]", "09:00:00Z[UTC]", "09:00:00Z"];
const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
invalidStrings.forEach(arg => {});