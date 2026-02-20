const invalidStrings = ["2019-10-01T09:00:00Z", "2019-10-01T09:00:00Z[UTC]"];
const dateTime = new Temporal.PlainDateTime(2000, 5, 2);
invalidStrings.forEach(arg => {});