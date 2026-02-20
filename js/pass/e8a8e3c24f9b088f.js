const invalidStrings = ["1976-11-18T15:23:30.12\u221202:00", "1976-11-18T15:23:30.12-02:00[\u221202:00]", "1976-11-18T15:23:30.12\u221202:00[\u221202:00]", "\u2212009999-11-18T15:23:30.12[UTC]"];
const datetime = new Temporal.ZonedDateTime(0n, "UTC");
invalidStrings.forEach(arg => {});