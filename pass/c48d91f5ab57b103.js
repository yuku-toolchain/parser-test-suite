const invalidStrings = ["2019-10-01T09:00:00Z", "2019-10-01T09:00:00Z[UTC]", "09:00:00Z[UTC]", "09:00:00Z"];
const plainTime = new Temporal.PlainTime();
invalidStrings.forEach(arg => {});