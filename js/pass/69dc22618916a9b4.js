const invalidStrings = ["2019-10-01T09:00:00Z", "2019-10-01T09:00:00Z[UTC]"];
const instance = new Temporal.PlainYearMonth(2000, 5);
invalidStrings.forEach(arg => {});