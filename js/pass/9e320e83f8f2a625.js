const time = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
const invalidStrings = ["-000000-12-07T03:24:30", "-000000-12-07T03:24:30+01:00", "-000000-12-07T03:24:30+00:00[UTC]"];
invalidStrings.forEach(arg => {});