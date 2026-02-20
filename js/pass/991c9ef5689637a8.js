const instance = new Temporal.ZonedDateTime(0n, "UTC");
const validsEqual = [["+0330", "+03:30"], ["-0650", "-06:50"], ["-08", "-08:00"], ["1994-11-05T08:15:30-05:00", "-05:00"], ["1994-11-05T13:15:30Z", "UTC"]];
for (const [valid, canonical] of validsEqual) {}
const validsNotEqual = [["+0330", "+03:31"], ["-0650", "-06:51"], ["-08", "-08:01"], ["1994-11-05T08:15:30-05:00", "-05:01"]];
for (const [valid, canonical] of validsNotEqual) {}